import Card from "../../components/Card";
import { leetcodeIcon } from "../../assets/asset";
import { useEffect } from "react";

interface LeetCodeStatsResponse {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  reputation: number;
  acceptanceRate: number;
}

function updateLeetcodeStats(result: LeetCodeStatsResponse) {
  const documentObject = document.documentElement;
  const {
    easySolved,
    mediumSolved,
    hardSolved,
    totalEasy,
    totalMedium,
    totalHard,
  } = result;
  const easyPercentage = Math.round((easySolved / totalEasy) * 100);
  const mediumPercentage = Math.round((mediumSolved / totalMedium) * 100);
  const hardPercentage = Math.round((hardSolved / totalHard) * 100);

  documentObject.style.setProperty(
    "--leetcode-easy-progress",
    `${easyPercentage}%`,
  );
  documentObject.style.setProperty(
    "--leetcode-medium-progress",
    `${mediumPercentage}%`,
  );
  documentObject.style.setProperty(
    "--leetcode-hard-progress",
    `${hardPercentage}%`,
  );
}

export default function LeetCodeStats() {
  useEffect(() => {
    async function getLeetcodeStats() {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Shrook13",
          {
            method: "GET",
          },
        );
        const result: LeetCodeStatsResponse = await response.json();
        if (result && result.status === "success") {
          updateLeetcodeStats(result);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    }
    getLeetcodeStats();
  }, []);

  return (
    <section className="w-full px-8">
      <Card className="flex flex-col items-center justify-center gap-5">
        <span className="flex items-center justify-start gap-4">
          <img src={leetcodeIcon} alt="Leetcode Icon" />
          <h3>Leetcode Stats</h3>
        </span>
        <div className="flex items-center justify-between gap-2">
          {/* Easy */}
          <span className="easy-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-white p-9"></span>
          </span>
          {/* Medium */}
          <span className="medium-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-(--color-card-primary) p-9"></span>
          </span>
          {/* Hard */}
          <span className="hard-progress flex items-center justify-center rounded-full border-[1px] border-solid border-(--color-card-border) p-1">
            <span className="rounded-full border-[1px] border-solid border-(--color-card-border) bg-(--color-card-primary) p-9"></span>
          </span>
        </div>
      </Card>
    </section>
  );
}
