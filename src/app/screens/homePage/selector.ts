import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import HomePage from ".";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
);

export const retrievenewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retrievetopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
