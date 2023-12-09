import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './popup.css'; // Assuming you have a custom CSS file

const MyButton = () => {
  useEffect(() => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    // eslint-disable-next-line no-unused-vars
    const popoverList = popoverTriggerList.map((popoverTriggerEl) => {
      const popover = new window.bootstrap.Popover(popoverTriggerEl);

      // Handle clicks outside the popover to close it
      const handleDocumentClick = (event) => {
        const clickedElement = event.target;
        const isPopoverVisible = popover._element && popover._element.contains(clickedElement);
        if (!isPopoverVisible) {
          popover.hide();
        }
      };

      document.body.addEventListener('mousedown', handleDocumentClick);

      // Cleanup event listener on component unmount
      return () => {
        popover.dispose();
        document.body.removeEventListener('mousedown', handleDocumentClick);
      };
    });

  }, []);

 
}

export default MyButton;
