<<<<<<< HEAD
import React, { useRef, useState, useEffect } from 'react';
=======
import React, { useRef, useState } from 'react';
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
import './Navbar.css';
import insta_log from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import react from '../../images/love.svg';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import pp from '../../images/avt-ins.jpg';
import add from '../../images/add.png';
import reactClick from '../../images/blacklove.png';
import { useHistory } from 'react-router';
import Popup from '../Popup/Popup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Autocomplete } from '@mui/material';
import { TextField } from '@material-ui/core';
<<<<<<< HEAD
import InfoSection from '../InfoSuggestion/InfoSection';

const top100Films = [
  {
    username: 'ducdatchelsea',
    fullname: 'Đức Đạt Chelsea',
  },
  {
    username: 'hieupc',
    fullname: 'Phan Chí Hiếu',
  },
  {
    username: 'parkchangel',
    fullname: 'Hoàng Huy Quân',
  },
  {
    username: 'lkbinh',
    fullname: 'Lương Khánh Bình',
  },
];

const ListNotifi = [
  {
    userId: '1',
    username: 'hoanghuyquan',
    avatar: 'dlldldldldldldld',
    content: 'đã theo dõi bạn',
    imgPost: '',
    postId: '',
  },
  {
    userId: '2',
    username: 'phanchihieu',
    avatar: 'dlldldldldldldld',
    content: 'đã thích ảnh của bạn',
    imgPost:
      'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/p552x414/250170656_395700765612419_2940331110762738992_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=825194&_nc_ohc=dFHxwRNMin8AX_ivKt0&_nc_ht=scontent.fhan3-3.fna&oh=f84910449d7503c1efe90db25e0ee3b4&oe=61A957A7',
    postId: 'ddjkdl',
  },
  {
    userId: '1',
    username: 'hoanghuyquan',
    avatar: 'dlldldldldldldld',
    content: 'đã bình luận về ảnh của bạn',
    imgPost:
      'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/p552x414/250170656_395700765612419_2940331110762738992_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=825194&_nc_ohc=dFHxwRNMin8AX_ivKt0&_nc_ht=scontent.fhan3-3.fna&oh=f84910449d7503c1efe90db25e0ee3b4&oe=61A957A7',
    postId: 'ddđdd',
  },
];

const NavBar = () => {
  const refAvatar = useRef();
  const refNoti = useRef();
  const history = useHistory();
  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [toggleNoti, setToggleNoti] = useState(false);
=======
import { searchUser } from '../../redux/user/user.slice';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const history = useHistory();
  const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const [listUser, setListUser] = useState([]);
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
  const addPost = () => {
    setIsOpenCreatePost(true);
  };
  const handleClose = () => {
    setIsOpenCreatePost(false);
  };

<<<<<<< HEAD
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggleAvatar && refAvatar.current && !refAvatar.current.contains(e.target)) {
        setToggleAvatar(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [toggleAvatar]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggleNoti && refNoti.current && !refNoti.current.contains(e.target)) {
        setToggleNoti(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [toggleNoti]);
  return (
    <>
      <div style={{ zIndex: '999', width: '100%', position: 'fixed' }}>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}>
              {' '}
            </Grid>
            <Grid item xs={3}>
              <a href="/">
                {' '}
                <img className="navbar_logo" src={insta_log} width="105px" />
              </a>
            </Grid>
            <Grid item xs={3}>
              {/* <input text="text" className="navbar__searchBar" placeholder="Search" /> */}
              <Autocomplete
                className="navbar__searchBar__container"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option)}
                getOptionLabel={(option) => option.username}
                renderOption={(object, option) => {
                  return (
                    <div
                      className="search__dropdown_item"
                      onClick={() => {
                        history.push('/login');
                      }}
                    >
                      <Avatar src={pp} className="search__dropdown_item_avatar" />
                      <div>
                        <p className="search__dropdown_item_username">{option.username}</p>
                        <p className="search__dropdown_item_fullname">{option.fullname}</p>
                      </div>
                    </div>
                  );
                }}
                onInputChange={(e) => {
                  console.log(e.nativeEvent.data);
=======
  return (
    <>
      <div style={{ zIndex: '999', width: '100%', position: 'fixed' }}>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}>
              {' '}
            </Grid>
            <Grid item xs={3}>
              <a href="/">
                {' '}
                <img className="navbar_logo" alt="element" src={insta_log} width="105px" />
              </a>
            </Grid>
            <Grid item xs={3}>
              {/* <input text="text" className="navbar__searchBar" placeholder="Search" /> */}
              <Autocomplete
                className="navbar__searchBar__container"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={listUser.map((option) => option)}
                getOptionLabel={(option) => option.userName && option.fullName}
                renderOption={(object, option) => {
                  return (
                    <div
                      className="search__dropdown_item"
                      onClick={() => {
                        history.push('/login');
                      }}
                    >
                      <Avatar src={pp} className="search__dropdown_item_avatar" />
                      <div>
                        <p className="search__dropdown_item_username">{option.userName}</p>
                        <p className="search__dropdown_item_fullname">{option.fullName}</p>
                      </div>
                    </div>
                  );
                }}
                onInputChange={async (e) => {
                  const res = await dispatch(searchUser(e.target.value));
                  if (res?.payload?.data?.code === 0) {
                    setListUser(res.payload.data.data);
                  }
                  if (e.target.value === '') {
                    setListUser([]);
                  }

                  console.log('listUser: ', listUser);
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
                }}
                renderInput={(params) => (
                  <TextField
                    className="navbar__searchBar"
                    {...params}
                    placeholder="Tìm kiếm"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    variant="outlined"
<<<<<<< HEAD
=======
                    // onChange={handleSearch}
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
                  />
                )}
              />
            </Grid>
            <Grid item xs={3} className="navbar__img__container">
              <a href="/">
<<<<<<< HEAD
                <img className="navbar__img" src={home} width="25px" />
              </a>
              <img
                className="navbar__img"
=======
                <img className="navbar__img" alt="element" src={home} width="25px" />
              </a>
              <img
                className="navbar__img"
                alt="element"
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
                src={add}
                width="25px"
                height="25px"
                style={{ borderRadius: '1px' }}
                onClick={addPost}
              />
<<<<<<< HEAD
              {
                <div class="dropdown" ref={refNoti}>
                  {!toggleNoti ? (
                    <img
                      className="navbar__img"
                      src={react}
                      width="25px"
                      onClick={() => {
                        setToggleNoti(!toggleNoti);
                      }}
                    />
                  ) : (
                    <img
                      className="navbar__img"
                      src={reactClick}
                      width="25px"
                      height="25px"
                      onClick={() => {
                        setToggleNoti(!toggleNoti);
                      }}
                    />
                  )}
                  <div className="navbar__number__noti">2</div>
                  {toggleNoti && (
                    <>
                      <div className="dropdown__diamond"></div>
                      <div className="dropdown__content__noti">
                        {ListNotifi.map((noti) => {
                          return (
                            <div className="noti__component">
                              <Avatar src={pp} style={{ marginRight: '10px' }} />
                              <div style={{ fontWeight: '600' }}>{noti.username}&nbsp;</div>
                              <div>{noti.content}</div>
                              {noti.imgPost && (
                                <img src={noti.imgPost} width="30px" height="30px" style={{ marginLeft: 'auto' }} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              }
              <div class="dropdown" ref={refAvatar}>
=======
              {true ? (
                <img className="navbar__img" alt="element" src={react} width="25px" />
              ) : (
                <img className="navbar__img" alt="element" src={reactClick} width="25px" height="25px" />
              )}
              <div class="dropdown" ref={ref}>
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
                <Avatar
                  src={pp}
                  className="navbar__img navbar__avatar"
                  style={{ maxWidth: '25px', maxHeight: '25px' }}
                  onClick={() => {
                    setToggleAvatar(!toggleAvatar);
                  }}
                />
<<<<<<< HEAD
                {toggleAvatar && (
                  <>
                    <div className="dropdown__diamond"></div>
                    <div className="dropdown__content">
                      <div className="dropdown__component">
                        <AccountCircleIcon style={{ marginRight: '10px' }} />
                        Trang cá nhân
                      </div>
                      <div className="dropdown__component" style={{ marginBottom: '10px' }}>
                        <SettingsIcon style={{ marginRight: '10px' }} />
                        Cài đặt
                      </div>
                      <div className="dropdown__component">Đăng xuất</div>
                    </div>
                  </>
=======
                <div className="navbar__number__noti">2</div>
                {toggleAvatar && (
                  <div className="dropdown__content">
                    <div className="dropdown__component">
                      <AccountCircleIcon style={{ marginRight: '10px' }} />
                      Trang cá nhân
                    </div>
                    <div className="dropdown__component" style={{ marginBottom: '10px' }}>
                      <SettingsIcon style={{ marginRight: '10px' }} />
                      Cài đặt
                    </div>
                    <div
                      onClick={() => {
                        localStorage.removeItem('token');
                        history.push('/login');
                      }}
                      className="dropdown__component"
                    >
                      Đăng xuất
                    </div>
                  </div>
>>>>>>> 052503d41d835e13e523765ae913e566091c773f
                )}
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
      {isOpenCreatePost && (
        <Popup
          isOpen={isOpenCreatePost}
          handleClose={handleClose}
          title={'Tạo bài viết mới'}
          isIconClose={false}
        ></Popup>
      )}
    </>
  );
};

export default NavBar;
