import {Box} from "@chakra-ui/react";


const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <Box bg="#001112">© {currentYear} Centro Psicoanalítico "Dr. Celes E. Cáramos - Filial Quilmes de APA</Box>
      </footer>
    );
  };
  
  export default Footer;
  