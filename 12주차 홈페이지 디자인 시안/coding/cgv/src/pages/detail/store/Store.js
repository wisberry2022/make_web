import MainStore from './mainStore/MainStore';
import SubStore from './subStore/SubStore';

const Store = () => {
  return (
    <div className="store_wrapper">
      <MainStore />
      <SubStore />
    </div>
  )
}

export default Store;