import { Card, Table, Title, TableHead, TableHeaderCell, TableRow, TableBody, TableCell, Text, Badge } from "@tremor/react";
// import Check from "../public/icons/check.svg"
import { CheckIcon } from "@heroicons/react/outline";


const List = ({ data }) => {

    const listData = data[0].data;
    console.log(listData)
    return (
        <Card>
            <Title>Lista de propiedades</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Tipo</TableHeaderCell>
                        <TableHeaderCell>Rol</TableHeaderCell>
                        <TableHeaderCell>Direccion</TableHeaderCell>
                        <TableHeaderCell>Comuna</TableHeaderCell>
                        <TableHeaderCell>Agua</TableHeaderCell>
                        <TableHeaderCell>Electricidad</TableHeaderCell>
                        <TableHeaderCell>Gas</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listData.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell>{item.propiedad}</TableCell>
                            <TableCell>
                                <Text>{item.rolpredio}-{item.rolmanzana}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.calle} {item.numero} {item.depto}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.comuna}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge icon={CheckIcon} color="green">{item.nagua}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge icon={CheckIcon} color="green">{item.nluz}</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge icon={CheckIcon} color="green">{item.ngas}</Badge>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default List