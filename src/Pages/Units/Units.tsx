import { Checkbox, Slider, Button, Table } from "antd";
import "./units.scss";
import { useEffect, useState } from "react";
import { AgeFilterData, COSTS, CostFilterData, UnitsReducer } from "./units.types";
import data from "../../db/age-of-empires-units.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUnitsRequest } from "../../store/unitsData/unitsDataActions";

const { Column } = Table;

const Units = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const units = useSelector((state: UnitsReducer) => state?.unitsReducer.units.data);
    const loading = useSelector((state: UnitsReducer) => state?.unitsReducer.units.loading);
    const [costsFilterData, setCostsFilterData] = useState<CostFilterData[]>([
        {
            label: "Wood",
            key: "wood",
            value: [20, 50],
            checked: false,
        },
        {
            label: "Food",
            key: "food",
            value: [20, 50],
            checked: false,
        },
        {
            label: "Gold",
            key: "gold",
            value: [20, 50],
            checked: false,
        },
    ]);

    const [ageFilterData, setAgeFilterData] = useState<AgeFilterData[]>([
        { key: "all", label: "All", isSelected: true },
        { key: "dark", label: "Dark", isSelected: false },
        { key: "feudal", label: "Feudal", isSelected: false },
        { key: "castle", label: "Castle", isSelected: false },
        { key: "imperial", label: "Imperial", isSelected: false },
    ]);
    const [unitsData, setUnitsData] = useState<any[]>(units);

    useEffect(() => {
        dispatch(getUnitsRequest());
    }, [])

    useEffect(() => {
        filterUnits();
    }, [ageFilterData, costsFilterData]);

    const filterUnits = () => {
        let filteredUnits = [...data.units];
        const costFilterMap = new Map();
        const ageFilterMap = new Set();
        let ageFilters = [];
        costsFilterData
            .filter((filter: CostFilterData) => filter.checked === true)
            .forEach((filter: CostFilterData) =>
                costFilterMap.set(filter.label, filter.value)
            );
        if (ageFilterData[0].isSelected) {
            ageFilters = ageFilterData
                .slice(1)
                .map((filter: AgeFilterData) => filter.key);
        } else {
            ageFilters = ageFilterData.filter(
                (filter: AgeFilterData) => filter.isSelected
            );
        }
        ageFilters.map((filter: any) => ageFilterMap.add(filter.key || filter));
        filteredUnits = filteredUnits?.filter((unit: any) => {
            const ageFilter = ageFilterMap.has(unit.age.toLowerCase());

            if (costFilterMap.size !== 0) {
                if (unit.cost?.Wood && costFilterMap.has(COSTS.WOOD)) {
                    const costRange = costFilterMap.get(COSTS.WOOD);
                    return (
                        costRange[0] <= unit.cost?.Wood &&
                        costRange[1] >= unit.cost?.Wood &&
                        ageFilter
                    );
                }
                if (unit.cost?.Food && costFilterMap.has(COSTS.FOOD)) {
                    const costRange = costFilterMap.get(COSTS.FOOD);
                    return (
                        costRange[0] <= unit.cost?.Food &&
                        costRange[1] >= unit.cost?.Food &&
                        ageFilter
                    );
                }
                if (unit.cost?.Gold && costFilterMap.has(COSTS.GOLD)) {
                    const costRange = costFilterMap.get(COSTS.GOLD);
                    return (
                        costRange[0] <= unit.cost?.Gold &&
                        costRange[1] >= unit.cost?.Gold &&
                        ageFilter
                    );
                }
            } else {
                return ageFilter;
            }
        });
        setUnitsData(filteredUnits);
    };

    const onAgesFilterChange = (value: string) => {
        const selectedIndex = ageFilterData.findIndex(
            (filter: AgeFilterData) => filter.key === value
        );
        let ageFilters = [...ageFilterData];
        if (selectedIndex === 0) {
            if (!ageFilters[0].isSelected) {
                ageFilters = ageFilters.map((filter: AgeFilterData) => ({
                    ...filter,
                    isSelected: false,
                }));
            }
        } else {
            if (!ageFilters[selectedIndex].isSelected) {
                ageFilters[0].isSelected = false;
            } else {
                if (ageFilters.filter((filter: AgeFilterData) => filter.isSelected).length === 1) {
                    ageFilters[0].isSelected = true;
                }
            }
        }
        ageFilters[selectedIndex].isSelected =
            !ageFilters[selectedIndex].isSelected;
        setAgeFilterData(ageFilters);
    };

    const onCostFilterChange = (
        index: number,
        key: string,
        value: number[] | boolean
    ) => {
        const updatedFilters = [...costsFilterData];
        updatedFilters[index] = { ...updatedFilters[index], [`${key}`]: value };
        setCostsFilterData(updatedFilters);
    };

    return (
        <div>
            <div className="agesFilterContainer">
                <h2>Ages</h2>
                {ageFilterData.map((filter: AgeFilterData) => (
                    <Button
                        key={filter.key}
                        onClick={() => onAgesFilterChange(filter.key)}
                        type={filter.isSelected ? "primary" : "default"}
                    >
                        {filter.label}
                    </Button>
                ))}
            </div>
            <div className="costsFilterContainer">
                <h2>Costs</h2>
                {costsFilterData.map((filter: CostFilterData, index: number) => (
                    <div key={filter.key} className="costFilter">
                        <Checkbox
                            checked={filter.checked}
                            onChange={(e) =>
                                onCostFilterChange(index, "checked", e.target.checked)
                            }
                        >
                            {filter.label}
                        </Checkbox>
                        <div className="sliderContainer">
                            <Slider
                                defaultValue={[50, 50]}
                                range={{ draggableTrack: true }}
                                disabled={!filter.checked}
                                onAfterChange={(value: number[]) =>
                                    onCostFilterChange(index, "value", value)
                                }
                                min={0}
                                max={200}
                                className="slider"
                            />
                            <p>
                                {filter.checked ? filter.value[0] + "-" + filter.value[1] : "-"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tableContainer">
                <Table
                    loading={loading}
                    className="table"
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                navigate(`/units/detail/${record.id}`, {
                                    state: { data: record },
                                });
                            },
                        };
                    }}
                    pagination={false}
                    dataSource={unitsData}
                >
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column
                        title="Cost"
                        dataIndex="cost"
                        key="cost"
                        render={(record) => (
                            <p>
                                {record?.Food && "Food : " + record.Food}{"  "}
                                {record?.Wood && "Wood : " + record.Wood}{" "}
                                {record?.Gold && "Gold : " + record.Gold}{"  "}
                            </p>
                        )}
                    />
                </Table>
            </div>
        </div>
    );
};

export default Units;
