import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
    }),
  };
});

describe("Header Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Header mainPage={false} setSearchTextFun={() => {}} />
    );
    expect(getByPlaceholderText("Search here ...")).toBeTruthy();
  });

  it("navigates to SearchScreen on input focus", () => {
    const { getByPlaceholderText } = render(
      <Header mainPage={false} setSearchTextFun={() => {}} />
    );
    const input = getByPlaceholderText("Search here ...");

    fireEvent(input, "focus");

    expect(mockNavigate).toHaveBeenCalledWith("SearchScreen");
  });

  it("calls setSearchTextFun when typing", () => {
    const mockSetSearchTextFun = jest.fn();
    const { getByPlaceholderText } = render(
      <Header mainPage={false} setSearchTextFun={mockSetSearchTextFun} />
    );
    const input = getByPlaceholderText("Search here ...");

    fireEvent.changeText(input, "test");

    expect(mockSetSearchTextFun).toHaveBeenCalledWith("test");
  });

  it("calls goBack when back button pressed and mainPage is true", () => {
    const { getByRole } = render(
      <Header mainPage={true} setSearchTextFun={() => {}} />
    );
    const backButton = getByRole("button");

    fireEvent.press(backButton);

    expect(mockGoBack).toHaveBeenCalled();
  });

  it("navigates to BagScreen when bag icon pressed", () => {
    const { getAllByRole } = render(
      <Header mainPage={false} setSearchTextFun={() => {}} />
    );
    const buttons = getAllByRole("button");

    fireEvent.press(buttons[buttons.length - 1]); // last button is Bag icon

    expect(mockNavigate).toHaveBeenCalledWith("BagScreen");
  });
});
