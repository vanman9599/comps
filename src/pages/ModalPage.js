import React, {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () =>{
        setShowModal(true)
    }

    const handleClose = ({onClose}) =>{
        setShowModal(false);
    } 
    const actionBar = <div>
        <Button onClick={handleClose} primary>Close</Button>
    </div>
    const modal = <Modal onClose={handleClose}  actionBar={actionBar}>
        <p>This website is for demonstration purposes. Each c<Modal onClose={handleClose} />omponent was 
        created from scratch using React. </p>
        </Modal>
  return (
    <div className='relative'>
       <Button  onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>

        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>

        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>

        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
        <p>
        Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Proin 
             egestas neque nulla, vitae blandit
              arcu imperdiet vitae. Pellentesque
               a sem felis. Vestibulum vehicula 
               eget arcu non dapibus. Phasellus 
               interdum efficitur gravida. Class
                aptent taciti sociosqu ad litora
                 torquent per conubia nostra, per
                  inceptos himenaeos. Vestibulum 
                  ante ipsum primis in faucibus orci
                   luctus et ultrices posuere cubilia
                    curae; Curabitur viverra, leo ut
                     porttitor volutpat, erat velit 
                     egestas purus, ut feugiat purus
                      elit sit amet nisl. Donec sed 
                      metus vitae sem bibendum tempu
                      s nec in est. Nunc massa nisl,
                       tincidunt ut sollicitudin varius,
                        sodales a sem. Nullam vitae maximus
                         ex. Quisque maximus mattis blandit. Phasellus accumsan sem varius, tincidunt risus ac, lobortis neque. Proin mattis porta consequat.
             
        </p>
       
        </div>
  )
}

export default ModalPage