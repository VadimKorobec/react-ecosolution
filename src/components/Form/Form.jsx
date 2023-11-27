import arrowRight from '../../assets/img/arrowRightSmall.svg'

export const Form = () => {
    return <>
        <form>
            <input type="text" placeholder="Full name:" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Message" />
            <button>Send <img src={arrowRight} alt="arrow" /> </button>
        </form>
    </>
}