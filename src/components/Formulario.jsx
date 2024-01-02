const Formulario = ({ value, placeholder }) => {
    
    return (
        <>
            <div className="mb-3">
                <input className="form-control" type="text" defaultValue={value} disabled placeholder={placeholder} />
            </div>
        </>
    )
}

export default Formulario