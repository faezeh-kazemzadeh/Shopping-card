import { RotatingLines } from "react-loader-spinner";
import styles from './loader.module.css'
export default function Loader() {
  return (
    <div className={styles.Loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}
