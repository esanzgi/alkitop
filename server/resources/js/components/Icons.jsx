import { DEFAULT_USER_PROFILE } from '@/assets/utils/constants';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



export const FiltrarBtn = ({ handleOpenModal }) => {
  return (
    <div className='btn btn-success' style={{ display: 'flex', alignItems: 'center' }} onClick={handleOpenModal}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="16" width="16" stroke="currentcolor" strokeWidth="3" fill="none" style={{ overflow: 'visible' }}>
        <path d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
      </svg>
      <span className='ms-2'>Filtros</span>
    </div>
  );
};

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ color: 'black', fontSize: '24px' }} />
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black', fontSize: '24px' }} />
    </div>
  );
};

export const UserProfileCircle = ({ user, width, height, enableTooltip = true, enableLink = true }) => {
  if (!user) return null;
  const tooltipText = 'Perfila ikusi';

  const renderContent = () => (
    <div className="d-flex align-items-center justify-content-center border-success rounded-circle overflow-hidden pointer-at" style={{ width: `${width}px`, height: `${height}px` }}>
      <img
        src={(user.profileImage || user.profile_image) ?? DEFAULT_USER_PROFILE}
        alt="Imagen de perfil"
        className="w-100 h-100 object-fit-cover rounded-circle" />
    </div>
  );

  return (
    <>
      {enableTooltip ? (
        <AlkitopTooltip text={tooltipText} placement="bottom" bgColor="bg-success">
          {enableLink ? (
            <Link href={`/users/profile/${user.idUser}`}>
              {renderContent()}
            </Link>
          ) : (
            renderContent()
          )}
        </AlkitopTooltip>
      ) : (
        renderContent()
      )}
    </>
  );
};

export const AlkitopTooltip = ({ text, placement, delay, bgColor, children }) => {

  const tooltip = (
    <Tooltip id={`tooltip-${placement}`} style={{ backgroundColor: bgColor }}>
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={tooltip}
      delay={delay}
    >
      {children}
    </OverlayTrigger>
  );
};

AlkitopTooltip.defaultProps = {
  text: 'Default Tooltip Text',
  placement: 'bottom',
  delay: { show: 600, hide: 100 },
  bgColor: 'dark'
};

