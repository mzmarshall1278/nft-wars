const Chip = ({club}) => {
    return ( 
        <span className={`text-sm rounded-full w-fit px-2 py-1 mt-1 text-white
            ${
                club ==='Wizards Club'? 'bg-[rgb(28,77,26)]':
                club ==='Vampires Club'? 'bg-[#ff0808]':
                club === 'Grecian Club'? 'bg-[#046878]':
                club === 'Pirates Club'? 'bg-[#590051]': 'bg-[#ae9400]'
            }
        `}>
            {club}
        </span>
     );
}
 
export default Chip;