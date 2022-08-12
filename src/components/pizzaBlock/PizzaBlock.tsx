import React from "react";
import Pizza from "../pizza/Pizza";
import PizzaSkeleton from "../pizzaSkeleton/PizzaSkeleton";
import { useSelector } from "react-redux";

type PizzaBlocktypes = {
  isLoading: boolean;
};

const PizzaBlock: React.FC<PizzaBlocktypes> = ({ isLoading }) => {
  const pizzas = useSelector((state: any) => state.pizzas.pizzas);

  return (
    <>
      {pizzas.length ? (
        <ul className="content__items">
          {pizzas.map((pizza: any, index: number) =>
            isLoading ? (
              <PizzaSkeleton key={index} />
            ) : (
              <Pizza key={pizza.id} {...pizza} />
            )
          )}
        </ul>
      ) : (
        <p>По Вашему запросу ничего не найденно</p>
      )}
    </>
  );
};

export default PizzaBlock;