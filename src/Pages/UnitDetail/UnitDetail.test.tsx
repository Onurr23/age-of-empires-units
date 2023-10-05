import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import UnitDetail from "./UnitDetail";

test("UnitDetail renders with correct data", () => {
    const data = {
        id: 123,
        name: "Sample Unit",
        description: "This is a sample unit description.",
        age: "Feudal Age",
        cost: {
            Wood: 50,
            Food: 30,
            Gold: 100,
        },
        build_time: "2 minutes",
        reload_time: "5 seconds",
        hit_points: 150,
        attack: 25,
        accuracy: "High",
    };

    const { getByText } = render(
        <MemoryRouter initialEntries={["/units/detail/123"]}>
            <Route path="/units/detail/:id">
                <UnitDetail />
            </Route>
        </MemoryRouter>
    );

    expect(getByText(`Detail for Item ID: ${data.id}`)).toBeInTheDocument();
    expect(getByText(`Name: ${data.name}`)).toBeInTheDocument();
    expect(getByText(`Description: ${data.description}`)).toBeInTheDocument();
    expect(getByText(`Minimum Required Age: ${data.age}`)).toBeInTheDocument();
    expect(getByText(`Wood Cost: ${data.cost.Wood}`)).toBeInTheDocument();
    expect(getByText(`Food Cost: ${data.cost.Food}`)).toBeInTheDocument();
    expect(getByText(`Gold Cost: ${data.cost.Gold}`)).toBeInTheDocument();
    expect(getByText(`Build Time: ${data.build_time}`)).toBeInTheDocument();
    expect(getByText(`Reload Time: ${data.reload_time}`)).toBeInTheDocument();
    expect(getByText(`Hit Points: ${data.hit_points}`)).toBeInTheDocument();
    expect(getByText(`Attack: ${data.attack}`)).toBeInTheDocument();
    expect(getByText(`Accuracy: ${data.accuracy}`)).toBeInTheDocument();
});
