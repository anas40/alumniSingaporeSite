import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { FaAngleDown, FaAngleUp, FaImages, FaMicrophone, FaHome, FaHandshake } from 'react-icons/fa'
import { MdPhoto, MdContactPhone, MdWork, MdEvent } from 'react-icons/md'
import { GoPerson, GoInfo } from 'react-icons/go'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: '#8d1a1a',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                textDecoration: 'none',
                color: theme.palette.common.white
            },
        }
    },
}))(MenuItem);

const mapIcon = {
    FaImages, FaHandshake, FaMicrophone, FaHome, MdContactPhone, MdWork, MdEvent, MdPhoto, GoPerson, GoInfo, BsFillPeopleFill, RiTeamFill
}


export default function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {props.item.sub.length !== 0 ? <>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    className="navButton"
                    style={{ background: 'transparent', boxShadow: 'none', color: 'white' }}
                    onClick={handleClick}
                >
                    {React.createElement(mapIcon[props.item.icon], { fontSize: "large", className: 'mr-1' })}{props.item.tag} {anchorEl ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                </Button>

                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {props.item.sub.map(sub =>
                        <StyledMenuItem className="listItem">
                            <Link href={sub.href} className="navLinks">
                                <ListItemIcon>
                                    {React.createElement(mapIcon[sub.icon], { fontSize: "large" })}
                                </ListItemIcon>
                                <ListItemText>
                                    {sub.tag}
                                </ListItemText>
                            </Link>
                        </StyledMenuItem>
                    )}
                </StyledMenu>
            </>
                :
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    href={props.item.href}
                    className="navButton"
                    style={{ background: 'transparent', boxShadow: 'none', color: 'white' }}
                >
                    {React.createElement(mapIcon[props.item.icon], { fontSize: "large", className: 'mr-1' })}{props.item.tag} 
                </Button>
            }
        </div>
    );
}
