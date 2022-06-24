import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { label, operation, double, triple, click } = props;
    return (
        <>
            <button 
            onClick={e=> click(label)}
            className={`
                button
                ${operation ? 'operation': ''}
                ${double ? 'double': ''}
                ${triple ? 'triple': ''}                
            `}>{label}</button>
        </>
    )
}