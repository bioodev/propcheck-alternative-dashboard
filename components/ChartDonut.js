import { Card, Title, DonutChart } from "@tremor/react";



const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const ChartDonut = ({ title, chartData }) => (
    <Card className="max-w-lg">
        <Title>{title}</Title>
        <DonutChart
            className="mt-6"
            data={chartData}
            category="total"
            index="name"
            valueFormatter={valueFormatter}
            colors={[ "indigo", "rose", "cyan", "amber"]}
        />
    </Card>
);
export default ChartDonut;