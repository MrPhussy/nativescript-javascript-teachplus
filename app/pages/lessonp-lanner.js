import { createActionBar } from "../components/action-bar"; 
import { GPTPrompt } from "../components/gpt-prompt";
import { Page } from "@nativescript/core";
import { firebase } from "../utils/firebase";

export function LessonPlanner() {
  createActionBar(this, "New Lesson Plan"); 
  
  const page = new Page();
  const { yearGroup, subject, topic } = page.navigationContext;  // From list tap
  
  const gptPrompt = GPTPrompt({ yearGroup, subject, topic });
  page.content = gptPrompt.content;
  
  gptPrompt.submitButton.on("tap", () => {
    const response = gptPrompt.scrollView.content;
    firebase.saveLessonPlan({ yearGroup, subject, topic, response });
  });  
  
  this.content = page;
}