import React, { useState, useEffect, useContext } from "react";
import { RiWallet3Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  // console.log(properties)
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 200000",
    },
    {
      value: "300000 - 400000",
    },
    {
      value: "500000 - 600000",
    },
    {
      value: "700000 - 800000",
    },
    {
      value: "900000 - 1000000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {price}
          </div>
          <div className="text-[13px]">choose price range</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices &&
          prices.map((price, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price.value)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {price.value}
              </Menu.Item>
            );
          })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
