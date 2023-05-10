import { ActionBar } from "@nativescript/core";

export const createActionBar = (page, title) => {
  const actionBar = new ActionBar();
  actionBar.title = title;
  page.actionBar = actionBar;
};