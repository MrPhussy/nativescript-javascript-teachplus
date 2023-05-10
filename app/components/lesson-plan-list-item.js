import { ListItem, Label } from "@nativescript/core";

export const LessonPlanListItem = ({ yearGroup, subject, topic, summary }) => {
  const listItem = new ListItem();
  listItem.addChild(new Label({ text: `${yearGroup} - ${subject} - ${topic}` }));
  listItem.addChild(new Label({ text: summary }));
  
  return listItem;
};