import { getCategoriesAndDocuments } from "../../utils/Firebase/Firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categoriesArray,
});

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: categoriesArray,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
