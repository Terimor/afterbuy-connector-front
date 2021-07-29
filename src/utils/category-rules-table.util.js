import EditIcon from '@material-ui/icons/Edit';

export const columns = [
    {id: 'position', label: '#'},
    {id: 'rule', label: 'Keywords'},
    {id: 'is_excluding', label: 'Excluding'},
    {id: 'is_active', label: 'Active'},
    {id: 'action', label: 'Action'}
];

export const flattenRules = (rows, onAction) => {
    return rows.map((row, index) => {
        return {
            ...row, position: index + 1,
            is_excluding: row.is_excluding ? 'true' : 'false',
            is_active: row.is_active ? 'true' : 'false',
            action: <EditIcon onClick={(event) => {
                onAction(row.id)
                event.stopPropagation();
            }}/>
        }
    })
}