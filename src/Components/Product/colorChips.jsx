function ColorChips({colorChips}) {

    return (
        <div className="color-chips">
            <ul>
                { colorChips.map((chip, index) =>
                <li key={index} title={chip.colour_name}  style={{backgroundColor : chip.hex_value}}></li>
                )}
            </ul>            
        </div>
    );
  }
  
  export default ColorChips;