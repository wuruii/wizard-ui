import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Overlay as BSOverlay, Tooltip } from 'react-bootstrap';
import { OverlayProps } from '../../interface';
import './style.scss';

const Overlay: React.FC<OverlayProps> = props => {
  const { show: propsShow, placement, children, label, rootClose, onHide, ...restProps } = props;
  const [show, setShow] = useState(propsShow || false);
  const wrapper = React.useRef<HTMLDivElement>(null);
  const label_is_node = label && label.hasOwnProperty('$$typeof');
  function handleClick() {
    setShow(!show);
  }
  function handleHide() {
    if (rootClose) {
      setShow(false);
      onHide && onHide();
    }
  }
  function renderCustomLabel() {
    if (label_is_node) {
      return <div className="overlay-label">{label}</div>;
    } else {
      return (
        <Tooltip
          placement={placement}
          className="overlay-label in"
          id={`overload-${placement || 'right'}`}
        >
          {label}
        </Tooltip>
      );
    }
  }
  return (
    <div className="overlay-wrapper">
      <div ref={wrapper} className="overlay-target" onClick={handleClick}>
        {children}
      </div>
      <BSOverlay
        show={show}
        target={wrapper.current || undefined}
        rootClose={rootClose}
        onHide={handleHide}
        placement={placement}
        {...restProps}
      >
        {renderCustomLabel()}
      </BSOverlay>
    </div>
  );
};

Overlay.propTypes = {
  /* 配置overlay初始是否显示 */
  show: PropTypes.bool,
  /* 配置overlay是否在点击root元素时消失 */
  rootClose: PropTypes.bool,
  /* 配置overlay方向 */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /* 配置overlay点击root元素消失时的事件，需指定rootClass */
  onHide: PropTypes.func,
  /* 配置overlay动画进入之前事件 */
  onEnter: PropTypes.func,
  /* 配置overlay动画进入时事件 */
  onEntering: PropTypes.func,
  /* 配置overlay动画进入之后事件 */
  onEntered: PropTypes.func,
  /* 配置overlay动画离开之前事件 */
  onExit: PropTypes.func,
  /* 配置overlay动画进入时事件 */
  onExiting: PropTypes.func,
  /* 配置overlay动画进入之后事件 */
  onExited: PropTypes.func,
};
Overlay.defaultProps = {
  show: false,
  rootClose: false,
  animation: true,
  placement: 'right',
};

export default Overlay;
