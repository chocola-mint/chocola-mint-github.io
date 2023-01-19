import { Box, Button, ImageList, ImageListItem, ImageListItemBar, Modal, Typography, } from '@mui/material';
import React from 'react';
export type WorkEntry = {
    thumbnail: string, 
    title: string, 
    subtitle: string,
    info?: string,
    descBody?: JSX.Element,
    link?: string,
    year: number,
};
/** Styling for each work entry item's modal. */
const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

/** Component for each work entry. 
 * key prop is necessary!
*/
function WorkEntryItem(props: { key: React.Key, workEntry: WorkEntry}){
    const work = props.workEntry;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <ImageListItem>
            <img
                src={`${work.thumbnail}`}
                srcSet={`${work.thumbnail}`}
                alt={work.title}
                loading="lazy"
            />
        <ImageListItemBar
            title={work.title}
            subtitle={work.subtitle}
            actionIcon={
            <Button 
                variant="contained"
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                onClick={handleOpen}
                aria-label={`info about ${work.title}`}>
                Info
            </Button>
            }
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {work.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {work.descBody}
            </Typography>
            </Box>
        </Modal>
        </ImageListItem>
    )
}

/** The component that renders the "image gallery" in the Works page. */
export default function WorksList(props: {
    cols?: number,
    itemData: WorkEntry[]}){
    return (
        <ImageList sx={{ width: '100%'}} cols={props.cols}>
        {props.itemData.map((item, index) => <WorkEntryItem key={index} workEntry={item}/>)}
        </ImageList>)
}