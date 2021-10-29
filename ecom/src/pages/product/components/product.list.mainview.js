
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { SORT_PRODUCT_LIST } from "../../../const/options.list.const"
import { SortProductList } from "./custom.select.sort"
export const MainView = props => {
    const generateProductCard = () => {
        if (props.data === null) {
            return
        }
        return props.data.map(element => {
            console.log("remain: ", element.remain)
            return (
                <ProductCard
                    remain={element.remain}
                    key={element.id}
                    id={element.id}
                    image={element.img}
                    name={element.name}
                    price={element.price}
                    mainCtg={element.mainCtg}
                    subStg={element.subStg}
                />
            )
        })
    }

    const onChange = value => {
        if (props.onSortChange)
            props.onSortChange(value)
        return
    }

    return (
        <div className="product__mainview">
            <div className="product__mainview-header-container">
                <div className="product__mainview-sort-button">
                    <SortProductList
                        placeholder="Sort"
                        options={SORT_PRODUCT_LIST}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="product__mainview-body-container">
                {generateProductCard()}
            </div>
            <div className="product__mainview-footer-container">

            </div>
        </div>
    )
}

const ProductCard = props => {
    const history = useHistory()

    const toProductInfo = () => {
        if (props.remain === 0)
            return
        const params = {
            // TODO: CHANGE THIS AFTER APPLIED THE API
            id: props.id,
            mc : props.mainCtg,
            sc : props.subStg
        }
        const query = new URLSearchParams(params)
        history.push("/info?" + query.toString())
    }
    return (
        <div className="product__card">
            <div onClick={toProductInfo} className="product__card-image">
                <img
                    alt="card"
                    className="product__card-image-size"
                    src={props.image} />
                {
                    props.remain === 0
                        ?
                        <div className="product__card-sold-out">Sold out</div>
                        :
                        <button className="product__card-hover">+ Quick shop</button>
                }
            </div>
            <div className="product__card-name">
                {props.name}
            </div>
            <div className="product__card-price">
                ${props.price}
            </div>
        </div>
    )
}
