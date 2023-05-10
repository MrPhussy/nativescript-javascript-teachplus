import firebase from 'nativescript-plugin-firebase';

const config = require('../google-services');
firebase.init(config);

const db = firebase.database();
const lessonPlans = db.ref('lessonPlans');

export const firebase = {
  saveLessonPlan: (plan) => {
    lessonPlans.push(plan);
  },
  getLessonPlans: () => {
    return lessonPlans.once('value').then((snapshot) => {
      return snapshot.val();
    });
  },
};
