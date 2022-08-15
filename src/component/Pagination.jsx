const Pagination = ({data, RenderComponent, dataLimit, currentPage}) => {
    
    const getPaginatedData = () => {
        const startIndex = currentPage;
        const endIndex = startIndex + dataLimit;
        return  data.slice(startIndex, endIndex);
    }
        
    return(
        <tbody>
            <>
                {getPaginatedData().map((data, id) => (
                    <RenderComponent  key={id} data={data} />
                ))}
            </>            
        </tbody>
    )
}

export default Pagination