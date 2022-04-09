const Chip = ({club}) => {
    return ( 
        <span className={`text-sm rounded-full w-fit px-2 py-1 mt-1 text-white
            ${
                club ==='Magic Club'? 'bg-wizard':
                club ==='Vampires Club'? 'bg-vampire':
                club === 'Grecian Club'? 'bg-greece':
                club === 'Pirates Club'? 'bg-pirate': 
                club === 'Elves Club'? 'bg-elf': 
                club === 'Warriors Club'? 'bg-warrior': 'bg-monster'
            }
        `}>
            {club}
        </span>
     );
}
 
export default Chip;