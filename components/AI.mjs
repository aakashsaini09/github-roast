import { userData } from "@/app/(root)/github/page";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCLPuwCulCc8pxRdCE2AVvak2zjaKForgU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function AIfunction({ user1Data, user2Data }) {
  // Helper function to format repositories
  const formatRepos = (reposReadme) =>
    reposReadme
      .map(
        (repo) =>
          `- **${repo.name}**: ${repo.description || "No description available"}\n  ${repo.readme.substring(0, 100)}${repo.readme.length > 100 ? "..." : ""}`
      )
      .join("\n");

  // Summarize user data
  const user1Summary = `
  Name: ${user1Data.name || "Unknown"}
  Bio: ${user1Data.bio || "No bio available"}
  Blog: ${user1Data.blog || "No blog"}
  Location: ${user1Data.location || "No location"}
  Company: ${user1Data.company || "No company"}
  Followers: ${user1Data.followers || 0}
  Following: ${user1Data.following || 0}
  Public Repos: ${user1Data.public_repos || 0}
  Profile README: ${user1Data.profileReadme ? user1Data.profileReadme.substring(0, 200) : "No profile README available"}
  Notable Repositories:
  ${user1Data.reposReadme.length > 0 ? formatRepos(user1Data.reposReadme) : "No notable repositories"}
  `;

  const user2Summary = `
  Name: ${user2Data.name || "Unknown"}
  Bio: ${user2Data.bio || "No bio available"}
  Blog: ${user2Data.blog || "No blog"}
  Location: ${user2Data.location || "No location"}
  Company: ${user2Data.company || "No company"}
  Followers: ${user2Data.followers || 0}
  Following: ${user2Data.following || 0}
  Public Repos: ${user2Data.public_repos || 0}
  Profile README: ${user2Data.profileReadme ? user2Data.profileReadme.substring(0, 200) : "No profile README available"}
  Notable Repositories:
  ${user2Data.reposReadme.length > 0 ? formatRepos(user2Data.reposReadme) : "No notable repositories"}
  `;

  const prompt = `
  Act as a GitHub profile evaluator. Below are the details of two users:
  First: ${user1Summary}
  Second: ${user2Summary}
  Your task:
  - Compare the profiles and determine which one is better overall.
  - If one profile is clearly better, praise that user. Be witty and engaging, and use emojis to emphasize your points.
  - If one profile is weaker, humorously criticize it with jokes. You are allowed to use bad words too and the person who's profile is good praise him like anything.
  - If the profiles are equally good, praise both users equally.
  - Ignore any links or unrelated content in the data.
  - Your response should be concise, insightful, and entertaining, suitable for direct display in the UI.
  - If you see there is no data for any user (means user entered the wrong github Username) or user entered the same username for both users and you got same data to compare, then you can troll the user like you can't fool me or anything.
  `;

  try {
    console.log("prompt for AI: ", prompt);
    const result = await model.generateContent(prompt);
    console.log(result.response.text()); // AI's response
    return result.response.text(); // Return response for frontend
  } catch (error) {
    console.error("Error in AI Function:", error);
    return "An error occurred while generating the response.";
  }
}

