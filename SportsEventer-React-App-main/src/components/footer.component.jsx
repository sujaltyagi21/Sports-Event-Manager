const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='relative bottom-0 mx-auto text-center my-4 p-2 w-full'>
            <div>&copy; {year} All Rights Reserved</div>
            <div>
                Made by  <span className='text-blue-500 font-semibold'>Sujal</span>
            </div>
        </footer>
    );
};

export default Footer;
