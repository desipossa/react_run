const Props01 = ({ name, nickname }) => {
  // const { name, nickname } = props; 구조분해 할당한 후 프롭스 전달.
  return (
    <div style={{ color: '#369', fontSize: 24 }}>
      {name} 은 {nickname}로 불리길 좋아합니다. ...
      <button>click</button>
    </div>
  )
}

// 프롭스가 없을 때 디폴트 값
Props01.defaultProps = {
  name: '어이없음'
}

export default Props01;
