import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Units from "./Units";
import { MemoryRouter } from "react-router-dom";
import * as redux from 'react-redux';
import store from "../../store";

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { },
    };
};

beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { },
        };
    };
});

jest.mock("react-redux", () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn().mockReturnValue({
        unitsReducer: {
            units: {
                data: [
                    {
                        id: 1,
                        name: "Archer",
                        description:
                            "Quick and light. Weak at close range; excels at battle from distance",
                        age: "Feudal",
                        cost: {
                            Wood: 50,
                            Food: 30,
                        },
                        expansion: "Age of Kings",
                        build_time: 35,
                        attack_delay: 0.35,
                        armor: "0/0",
                        reload_time: 2,
                        hit_points: 150,
                        attack: 25,
                        accuracy: "80%",
                        movement_rate: 0.96,
                        line_of_sight: 6,
                        range: 30,
                    },
                    {
                        id: 2,
                        name: "Crossbowman",
                        description:
                            "Quick and light. Weak at close range; excels at battle from distance",
                        age: "Castle",
                        cost: {
                            Wood: 50,
                            Gold: 30,
                        },
                        expansion: "Age of Kings",
                        build_time: 35,
                        attack_delay: 0.35,
                        armor: "0/0",
                        reload_time: 2,
                        hit_points: 150,
                        attack: 25,
                        accuracy: "80%",
                        movement_rate: 0.96,
                        line_of_sight: 6,
                        range: 30,
                    },
                    {
                        id: 3,
                        name: "Arbalest",
                        description:
                            "Quick and light. Weak at close range; excels at battle from distance",
                        age: "Castle",
                        cost: {
                            Wood: 20,
                            Food: 10,
                        },
                        expansion: "Age of Kings",
                        build_time: 35,
                        attack_delay: 0.35,
                        armor: "0/0",
                        reload_time: 2,
                        hit_points: 150,
                        attack: 25,
                        accuracy: "80%",
                        movement_rate: 0.96,
                        line_of_sight: 6,
                        range: 30,
                    },
                    {
                        id: 4,
                        name: "Cavalry Archer",
                        description:
                            "Quick and light. Weak at close range; excels at battle from distance",
                        age: "Dark",
                        cost: {
                            Food: 40,
                            Gold: 30,
                        },
                        expansion: "Age of Kings",
                        build_time: 35,
                        attack_delay: 0.35,
                        armor: "0/0",
                        reload_time: 2,
                        hit_points: 150,
                        attack: 25,
                        accuracy: "80%",
                        movement_rate: 0.96,
                        line_of_sight: 6,
                        range: 30,
                    },
                ],
                loading: false,
            },
            loading: false
        },
    }),
}));


describe("Units component", () => {

    test("should handle age filter change", () => {
        const mockDispatch = jest.fn();
        jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

        const { container } = render(
            <redux.Provider store={store}>
                <MemoryRouter>
                    <Units />
                </MemoryRouter>
            </redux.Provider>);

        const feudalAgeButton = screen.getByRole("button", { name: "Feudal" });
        fireEvent.click(feudalAgeButton);

        expect(feudalAgeButton).toHaveClass("ant-btn-primary");
        const tableRow = container.getElementsByClassName("ant-table-row-level-0")[0]
        expect(tableRow).toHaveTextContent("1ArcherFeudal Wood : 25 Gold : 45");
    });

    test("should handle wood cost filter change", () => {
        const mockDispatch = jest.fn();
        jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

        const { container } = render(
            <redux.Provider store={store}>
                <MemoryRouter>
                    <Units />
                </MemoryRouter>
            </redux.Provider>);

        const woodCheckbox = screen.getByLabelText("Wood");
        fireEvent.click(woodCheckbox);

        const slider = container.getElementsByClassName("ant-slider-handle-2")[0]
        fireEvent.mouseMove(slider, { clientX: 100 });

        const tableRow = container.getElementsByClassName("ant-table-row-level-0")[0]
        expect(tableRow).toHaveTextContent("1ArcherFeudal Wood : 25 Gold : 45");

    });
    test("should handle food cost filter change", () => {
        const mockDispatch = jest.fn();
        jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

        const { container } = render(
            <redux.Provider store={store}>
                <MemoryRouter>
                    <Units />
                </MemoryRouter>
            </redux.Provider>);

        const foodCheckbox = screen.getByLabelText("Food");
        fireEvent.click(foodCheckbox);

        const slider = container.getElementsByClassName("ant-slider-handle-1")[0]
        fireEvent.mouseMove(slider, { clientX: 100 });

        const tableRow = container.getElementsByClassName("ant-table-row-level-0")[0]
        expect(tableRow).toHaveTextContent("6Hand CannoneerImperialFood : 45 Gold : 50");

    });
    test("should handle gold cost filter change", () => {
        const mockDispatch = jest.fn();
        jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

        const { container } = render(
            <redux.Provider store={store}>
                <MemoryRouter>
                    <Units />
                </MemoryRouter>
            </redux.Provider>);

        const goldCheckbox = screen.getByLabelText("Gold");
        fireEvent.click(goldCheckbox);

        const slider = container.getElementsByClassName("ant-slider-handle-1")[0]
        fireEvent.mouseMove(slider, { clientX: 100 });

        const tableRow = container.getElementsByClassName("ant-table-row-level-0")[0]
        expect(tableRow).toHaveTextContent("1ArcherFeudal Wood : 25 Gold : 45");
    });
});
