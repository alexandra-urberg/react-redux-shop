import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItem, FilterSliceFetch } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItem[], FilterSliceFetch>(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { categoryId, sortProperty, searchValue, currentPage } = params;
    const { data } = await axios.get<PizzaItem[]>(
      `https://66093beb0f324a9a2882f528.mockapi.io/Pizzas?page=${currentPage}&limit=4&${
        //пагинация с бэка
        categoryId > 0 ? `category=${categoryId}` : "" //сортировку по типу
      }&sortBy=${sortProperty.replace("-", "")}&order=${
        //сортировка по убыванию/повышению цены, популярности, по алфавиту
        sortProperty.includes("-") ? "asc" : "desc"
      }&&${
        searchValue ? `search=${searchValue}` : "" //фильтрация по поиску слова в header
      }`
    );
    return data;
  }
);
