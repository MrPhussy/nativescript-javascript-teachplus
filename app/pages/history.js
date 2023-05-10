import { createActionBar } from "../components/action-bar";
import { LessonPlanListItem } from "../components/lesson-plan-list-item";
import { ListView } from "@nativescript/core";
import { firebase } from "../utils/firebase";

export function History() { 
  createActionBar(this, "History");
  
  const listView = new ListView();
  firebase.getLessonPlans()
    .then(plans => {
      plans.forEach(plan => {
        listView.items.push(LessonPlanListItem(plan));  
      });
    });
  
  this.content = listView;
}