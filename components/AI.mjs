import { userData } from "@/app/(root)/github/page";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCko3-JmFAnbcOnPbPcGHmW_TSj87L9XKI");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function AIfunction({user1Data, user2Data}) {
  const prompt = `You need to behave as an evaluator, There is a person named: ${user1Data} and his github profile looks like this: ${user1Data}. There also one person named: ${user2Data} and his profile is like this: ${user2Data}. You need to evaluate both the user profiles. The user who profile is no as good as other make joke of him like anything, you are allowed to use bad words too and the person who's profile is good praise him like anything. Also some data may have links ignore the links, you don't have to scrape. Your response should only include the evaluation result nothing else as it will passed to the frontend app directly. Directly give the response as if you were talking to him. You can use emojis also. Also don't print uncessary [object] [object]thhing, handle carefully. Basically analyse everything carefully. Also the answer should be of medium length not too long, not too small, i.e. medium - to a bit long length. Also make sure you heavily criticize and make joke out of the person having not soo good profile. If profiles are almost equal praise both.`;
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.log("Error in AI Function: ", error)
  }
}