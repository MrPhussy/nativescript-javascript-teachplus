import { ScrollView, Button } from "@nativescript/core";
import { api } from "../utils/api";

export const GPTPrompt = ({ yearGroup, subject, topic }) => {
  const scrollView = new ScrollView();
  const submitButton = new Button();
  submitButton.text = "Generate Prompt";
  submitButton.on("tap", () => {
    api.getPrompt(yearGroup, subject, topic)
      .then(response => {
        scrollView.content = response;  
      });
  });  
  
  return {
    content: [scrollView, submitButton]
  }; 
};