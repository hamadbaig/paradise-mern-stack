// "use client";
// import styles from "./product.module.css";
// import { IoMdStar } from "react-icons/io";
// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import ProductCard from "@/component/products/ProductCard";
// import AddOn from "@/component/common/AddOn";
// import { FaTimes } from "react-icons/fa";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "@/reduxToolKit/slice";
// import { format } from "date-fns";
// import ReactImageMagnify from "react-image-magnify";
// import { productApi } from "@/reduxToolKit/slice";
// import { useRouter, useSearchParams } from "next/navigation";

// const Product = () => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top
//   }, []);

//   const options = {
//     Morning: ["07:00 - 09:00"],
//     FixTime: [
//       "08:00 - 13:00",
//       "12:00 - 17:00",
//       "14:00 - 19:00",
//       "16:00 - 21:00",
//       "19:00 - 23:00",
//     ],
//     Standard: [
//       "08:00 - 13:00",
//       "12:00 - 17:00",
//       "14:00 - 19:00",
//       "16:00 - 21:00",
//       "19:00 - 23:00",
//     ],
//     LateNight: ["19:00 - 23:00"],
//   };
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [message, setMessage] = useState("");
//   const [subOptions, setSubOptions] = useState([]);
//   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
//   const [isAddOnOpen, setIsAddOnOpen] = useState(false);
//   const [mainImage, setMainImage] = useState("");
//   const product = useSelector((state) => state.productApiData);
//   const [IDproducts, setIDProducts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   let ID = searchParams.get("id");

//   const handleProductClick = (product) => {
//     router.push(`/product?id=${encodeURIComponent(product._id)}`);
    
//   };

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (ID) {
//         try {
//           const response = await fetch(`${apiUrl}/getProductById`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ productId: ID }),
//           });

//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }

//           const data = await response.json();
//           if (data.success) {
//             setIDProducts(data.product);
//             setMainImage(data.product.imageUrl);
//             console.log("data fetched :", IDproducts);
//           } else {
//             console.error(data.message); // Handle the case where fetching was not successful
//           }
//         } catch (error) {
//           console.error("Error fetching product:", error);
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setError("No product ID provided");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [ID]);

//   useEffect(() => {
//     dispatch(productApi());
//   }, []);

//   if (!IDproducts) {
//     return <div>No product selected</div>;
//   }

//   const CartDispatch = () => {
//     const cartItems = {
//       name: IDproducts.name,
//       price: IDproducts.price,
//       imageUrl: IDproducts.imageUrl,
//       imageUrl1: IDproducts.imageUrl1,
//       imageUrl2: IDproducts.imageUrl2,
//       city: selectedCity,
//       date: selectedDate,
//       time: selectedTime,
//       method: selectedOption,
//       message: message,
//     };

//     // Retrieve the current cart items from local storage
//     let currentCartItems = JSON.parse(localStorage.getItem("cartItems"));

//     // Ensure currentCartItems is an array
//     if (!Array.isArray(currentCartItems)) {
//       currentCartItems = [];
//     }

//     // Add the new cart item to the array
//     currentCartItems.push(cartItems);

//     // Update local storage with the new array of cart items
//     localStorage.setItem("cartItems", JSON.stringify(currentCartItems));

//     console.log(cartItems, "items");
//     // dispatch(addToCart(cartItems));
//   };

//   const handleImageClick = (newImage) => {
//     setMainImage(newImage);
//   };
//   const isDisabled = !selectedTime;

//   const handleSelectCity = (e) => {
//     setSelectedCity(e.target.value);
//     setSelectedTime("");
//     setSelectedOption("");
//     setSelectedDate("");
//     setMessage("");
//   };

//   const handleSelectTime = (e) => {
//     setSelectedTime(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     const selected = e.target.value;
//     setSelectedOption(selected);
//     setSelectedTime(""); // Reset the sub-option when main option changes
//     setSubOptions(options[selected] || []);
//   };

//   const handleCart = (event) => {
//     event.preventDefault();
//     setIsAddOnOpen(true);
//   };

//   const closeCart = (event) => {
//     event.preventDefault();
//     setIsAddOnOpen(false);
//   };

//   const handleFocus = () => {
//     setIsDatePickerOpen(true);
//   };

//   const handleDateChange = (date) => {
//     const formattedDate = format(date, "yyyy-MM-dd");
//     setSelectedDate(formattedDate);
//     setIsDatePickerOpen(false);
//   };
//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };
//   const handleClick = (e) => {
//     e.preventDefault();
//     CartDispatch();
//     router.push("/");
//   };
//   const handleProceed = (e) => {
//     e.preventDefault();
//     CartDispatch();
//     router.push("/cart");
//   };
//   return (
//     <>
//       <div className={styles.main}>
//         <div className={styles.sliderImage}>
//           <div onClick={() => handleImageClick(IDproducts.imageUrl)}>
//             <img src={IDproducts.imageUrl} alt={IDproducts.name} />
//           </div>
//           <div onClick={() => handleImageClick(IDproducts.imageUrl1)}>
//             <img src={IDproducts.imageUrl1} alt={IDproducts.name} />
//           </div>
//           <div onClick={() => handleImageClick(IDproducts.imageUrl2)}>
//             <img src={IDproducts.imageUrl2} alt={IDproducts.name} />
//           </div>
//         </div>
//         <div className={styles.mainimg}>
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: "Main Product",
//                 isFluidWidth: true,
//                 src: mainImage,
//               },
//               largeImage: {
//                 src: mainImage,
//                 width: 900,
//                 height: 1000,
//               },
//               enlargedImageContainerDimensions: {
//                 width: "200%",
//                 height: "100%",
//               },
//             }}
//           />
//         </div>
//         <div className={styles.nameprice}>
//           <h2>{IDproducts.name}</h2>
//           <div>
//             <div className={styles.starreview}>
//               <div className={styles.star}>
//                 5{" "}
//                 <span>
//                   <IoMdStar className={styles.icon} />
//                 </span>
//               </div>
//               <div className={styles.review}>36 reviews</div>
//             </div>
//             <div className={styles.starreview}>
//               <div className={styles.review2}>
//                 <div>{IDproducts.price}</div>
//               </div>
//             </div>
//           </div>
//           <form className={styles.form}>
//             <div className={styles.inputdiv}>
//               <select
//                 id="select"
//                 value={selectedCity}
//                 onChange={handleSelectCity}
//                 className={styles.label}
//               >
//                 <option value="">choose Country</option>
//                 <option value="Pakistan">Pakistan</option>
//                 <option value="Oman">Oman</option>
//                 <option value="America">America</option>
//               </select>
//             </div>
//             <div className={styles.inputdiv}>
//               <DatePicker
//                 id="date"
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 dateFormat="yyyy/MM/dd"
//                 className={styles.label}
//                 minDate={new Date()} // Only allows present and future dates
//                 showPopperArrow={true} // Optional: hide the popper arrow
//                 placeholderText="Select a date"
//                 disabled={!selectedCity}
//                 onFocus={handleFocus}
//                 // onBlur={handleBlur}
//                 popperClassName={styles.customDatePickerPopper}
//               />
//               {isDatePickerOpen && (
//                 <div className={styles.datePickerOverlay}>
//                   <DatePicker
//                     id="popupDate"
//                     selected={selectedDate}
//                     onChange={handleDateChange}
//                     dateFormat="yyyy/MM/dd"
//                     inline
//                     className={styles.popupDatePicker}
//                     minDate={new Date()} // Only allows present and future dates
//                   />
//                 </div>
//               )}
//             </div>
//             <div className={styles.inputdiv}>
//               <select
//                 id="select"
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 className={styles.label}
//                 disabled={!selectedDate}
//               >
//                 <option value="">select Method</option>
//                 <option value="Morning">Morning Delivery</option>
//                 <option value="FixTime">Standard Delivery</option>
//                 <option value="Standard">Fixed Time Deliver</option>
//                 <option value="LateNight">Midnight Delivery</option>
//               </select>
//             </div>
//             <div className={styles.inputdiv}>
//               <select
//                 id="select"
//                 value={selectedTime}
//                 onChange={handleSelectTime}
//                 className={styles.label}
//                 disabled={!selectedOption}
//               >
//                 <option value="">Select time</option>
//                 {subOptions.map((time, index) => (
//                   <option key={index} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className={styles.inputdiv}>
//               <textarea
//                 id="message"
//                 placeholder="Enter Message"
//                 onChange={handleMessageChange}
//                 className={styles.label}
//                 disabled={!selectedTime}
//               />
//             </div>

//             <div className={styles.tab2}>
//               <div
//                 className={`${styles.add} ${isDisabled ? styles.disabled : ""}`}
//                 onClick={isDisabled ? null : handleCart}
//                 style={isDisabled ? { pointerEvents: "none" } : {}}
//               >
//                 Add to cart
//               </div>
//               {/* <Link
//                 className={`${styles.link} ${
//                   isDisabled ? styles.disabled : ""
//                 }`}
//                 href={isDisabled ? "#" : "/cart"}
//                 scroll={false}
//                 style={isDisabled ? { pointerEvents: "none" } : {}}
//               > */}
//               <div
//                 className={styles.buy}
//                 onClick={isDisabled ? null : handleProceed}
//               >
//                 Buy Now
//               </div>
//               {/* </Link> */}
//             </div>
//           </form>
//           <div className="description">
//             <h2>Description</h2>
//             <div className="productdetails">
//               <h3>Product Details</h3>
//               <ul className={styles.para}>
//                 <li>3 Red rose</li>
//                 <li>3 Limonium</li>
//                 <li>6 Ruscus</li>
//                 <li>Beautifully Wrapped</li>
//                 <li>Chocolate Fudge Cake</li>
//                 <li>Weight: Half Kg</li>
//                 <li>Portions: 4</li>
//               </ul>
//             </div>
//             <div className="deliveryinformation">
//               <h3>Delivery Information</h3>
//               <ul className={styles.para}>
//                 <li>
//                   All orders are delivered via Ferns N Petals
//                   temperature-controlled delivery vans.
//                 </li>
//                 <li>
//                   Your cake will arrive beautifully fresh for your occasion. We
//                   recommend that the cake(s) are stored in refrigerator before
//                   consumption.
//                 </li>
//                 <li>
//                   We recommend you to open the box upon handover and before
//                   leaving of our delivery executive.
//                 </li>
//               </ul>
//             </div>
//             <div className="deliveryinformation">
//               <h3>Care Instructor</h3>
//               <ul className={styles.para}>
//                 <li>Upon receiving the cake, refrigerate it immediately.</li>
//                 <li>
//                   Fondant cakes should be stored in an air conditioned
//                   environment before consumption.
//                 </li>
//                 <li>
//                   Slice and serve the cake at room temperature and make sure it
//                   is not exposed to heat.
//                 </li>
//                 <li>The cake should be consumed within 48 hours.</li>
//                 <li>Enjoy your cake!</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.seller}>
//         <div className={styles.heading2}>
//           <h2>What others are Watching</h2>
//         </div>
//         <div className={styles.prodContainer}>
//           <div className={styles.prod}>
//             {product.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 name={product.name}
//                 price={product.price}
//                 imageUrl={product.imageUrl}
//                 onClick={() => handleProductClick(product)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.tab}>
//         <div className={styles.add} onClick={handleCart}>
//           Add To Cart
//         </div>
//         <Link className={styles.link} href="/cart" scroll={false}>
//           <div className={styles.buy}>Buy Now</div>
//         </Link>
//       </div>
//       {isAddOnOpen && (
//         <>
//           <div className={styles.backdrop} />
//           <section className={styles.AddOn}>
//             <div className={styles.top}>
//               <h2>Add on something to make it extra special</h2>
//               <FaTimes className={styles.icon} onClick={closeCart} />
//             </div>

//             <AddOn />
//             <div className={styles.bottom}>
//               <h2>Bottom</h2>
//               <a className={styles.link} scroll={false} onClick={handleClick}>
//                 <button className={styles.button2}>
//                   {" "}
//                   Continue Without Add On
//                 </button>
//               </a>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default Product;

"use client";
import styles from "./product.module.css";
import { IoMdStar } from "react-icons/io";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProductCard from "@/component/products/ProductCard";
import AddOn from "@/component/common/AddOn";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "@/reduxToolKit/slice";
import { format } from "date-fns";
import ReactImageMagnify from "react-image-magnify";
import { useRouter, useSearchParams } from "next/navigation";

const Product = ({ productId }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isAddOnOpen, setIsAddOnOpen] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [IDproducts, setIDProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.productApiData);

  const options = {
    Morning: ["07:00 - 09:00"],
    FixTime: [
      "08:00 - 13:00",
      "12:00 - 17:00",
      "14:00 - 19:00",
      "16:00 - 21:00",
      "19:00 - 23:00",
    ],
    Standard: [
      "08:00 - 13:00",
      "12:00 - 17:00",
      "14:00 - 19:00",
      "16:00 - 21:00",
      "19:00 - 23:00",
    ],
    LateNight: ["19:00 - 23:00"],
  };

  const fetchProduct = async (ID) => {
    if (ID) {
      try {
        const response = await fetch(`${apiUrl}/getProductById`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: ID }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.success) {
          setIDProducts(data.product);
          setMainImage(data.product.imageUrl);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("No product ID provided");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  useEffect(() => {
    dispatch(productApi());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!IDproducts) return <div>No product selected</div>;

  const handleProductClick = (product) => {
    router.push(`/product?id=${encodeURIComponent(product._id)}`);
  };

  const CartDispatch = () => {
    const cartItems = {
      name: IDproducts.name,
      price: IDproducts.price,
      imageUrl: IDproducts.imageUrl,
      imageUrl1: IDproducts.imageUrl1,
      imageUrl2: IDproducts.imageUrl2,
      city: selectedCity,
      date: selectedDate,
      time: selectedTime,
      method: selectedOption,
      message: message,
    };

    let currentCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    currentCartItems.push(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
  };

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  const isDisabled = !selectedTime;

  const handleSelectCity = (e) => {
    setSelectedCity(e.target.value);
    setSelectedTime("");
    setSelectedOption("");
    setSelectedDate("");
    setMessage("");
  };

  const handleSelectTime = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    setSelectedTime("");
    setSubOptions(options[selected] || []);
  };

  const handleCart = (event) => {
    event.preventDefault();
    setIsAddOnOpen(true);
  };

  const closeCart = (event) => {
    event.preventDefault();
    setIsAddOnOpen(false);
  };

  const handleFocus = () => {
    setIsDatePickerOpen(true);
  };

  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setSelectedDate(formattedDate);
    setIsDatePickerOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    CartDispatch();
    router.push("/");
  };

  const handleProceed = (e) => {
    e.preventDefault();
    CartDispatch();
    router.push("/cart");
  };

  return (
    <>
    <div className={styles.main}>
      <div className={styles.sliderImage}>
        {[IDproducts.imageUrl, IDproducts.imageUrl1, IDproducts.imageUrl2].map((img, index) => (
          <div key={index} onClick={() => handleImageClick(img)}>
            <img src={img} alt={IDproducts.name} />
          </div>
        ))}
      </div>
      <div className={styles.mainimg}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Main Product",
              isFluidWidth: true,
              src: mainImage,
            },
            largeImage: {
              src: mainImage,
              width: 900,
              height: 1000,
            },
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%",
            },
          }}
        />
      </div>
      <div className={styles.nameprice}>
           <h2>{IDproducts.name}</h2>
           <div>
             <div className={styles.starreview}>
               <div className={styles.star}>
                 5{" "}
                 <span>
                   <IoMdStar className={styles.icon} />
                 </span>
               </div>
               <div className={styles.review}>36 reviews</div>
             </div>
             <div className={styles.starreview}>
               <div className={styles.review2}>
                 <div>{IDproducts.price}</div>
               </div>
             </div>
           </div>
           <form className={styles.form}>
             <div className={styles.inputdiv}>
               <select
                id="select"
                value={selectedCity}
                onChange={handleSelectCity}
                className={styles.label}
              >
                <option value="">choose Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Oman">Oman</option>
                <option value="America">America</option>
              </select>
            </div>
            <div className={styles.inputdiv}>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className={styles.label}
                minDate={new Date()} // Only allows present and future dates
                showPopperArrow={true} // Optional: hide the popper arrow
                placeholderText="Select a date"
                disabled={!selectedCity}
                onFocus={handleFocus}
                // onBlur={handleBlur}
                popperClassName={styles.customDatePickerPopper}
              />
              {isDatePickerOpen && (
                <div className={styles.datePickerOverlay}>
                  <DatePicker
                    id="popupDate"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    inline
                    className={styles.popupDatePicker}
                    minDate={new Date()} // Only allows present and future dates
                  />
                </div>
              )}
            </div>
            <div className={styles.inputdiv}>
              <select
                id="select"
                value={selectedOption}
                onChange={handleSelectChange}
                className={styles.label}
                disabled={!selectedDate}
              >
                <option value="">select Method</option>
                <option value="Morning">Morning Delivery</option>
                <option value="FixTime">Standard Delivery</option>
                <option value="Standard">Fixed Time Deliver</option>
                <option value="LateNight">Midnight Delivery</option>
              </select>
            </div>
            <div className={styles.inputdiv}>
              <select
                id="select"
                value={selectedTime}
                onChange={handleSelectTime}
                className={styles.label}
                disabled={!selectedOption}
              >
                <option value="">Select time</option>
                {subOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputdiv}>
              <textarea
                id="message"
                placeholder="Enter Message"
                onChange={handleMessageChange}
                className={styles.label}
                disabled={!selectedTime}
              />
            </div>

            <div className={styles.tab2}>
              <div
                className={`${styles.add} ${isDisabled ? styles.disabled : ""}`}
                onClick={isDisabled ? null : handleCart}
                style={isDisabled ? { pointerEvents: "none" } : {}}
              >
                Add to cart
              </div>
              {/* <Link
                className={`${styles.link} ${
                  isDisabled ? styles.disabled : ""
                }`}
                href={isDisabled ? "#" : "/cart"}
                scroll={false}
                style={isDisabled ? { pointerEvents: "none" } : {}}
              > */}
              <div
                className={styles.buy}
                onClick={isDisabled ? null : handleProceed}
              >
                Buy Now
              </div>

              {/* </Link> */}
            </div>
          </form>
          <div className="description">
            <h2>Description</h2>
            <div className="productdetails">
              <h3>Product Details</h3>
              <ul className={styles.para}>
                <li>3 Red rose</li>
                <li>3 Limonium</li>
                <li>6 Ruscus</li>
                <li>Beautifully Wrapped</li>
                <li>Chocolate Fudge Cake</li>
                <li>Weight: Half Kg</li>
                <li>Portions: 4</li>
              </ul>
            </div>
            <div className="deliveryinformation">
              <h3>Delivery Information</h3>
              <ul className={styles.para}>
                <li>
                  All orders are delivered via Ferns N Petals
                  temperature-controlled delivery vans.
                </li>
                <li>
                  Your cake will arrive beautifully fresh for your occasion. We
                  recommend that the cake(s) are stored in refrigerator before
                  consumption.
                </li>
                <li>
                  We recommend you to open the box upon handover and before
                  leaving of our delivery executive.
                </li>
              </ul>
            </div>
            <div className="deliveryinformation">
              <h3>Care Instructor</h3>
              <ul className={styles.para}>
                <li>Upon receiving the cake, refrigerate it immediately.</li>
                <li>
                  Fondant cakes should be stored in an air conditioned
                  environment before consumption.
                </li>
                <li>
                  Slice and serve the cake at room temperature and make sure it
                  is not exposed to heat.
                </li>
                <li>The cake should be consumed within 48 hours.</li>
                <li>Enjoy your cake!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seller}>
        <div className={styles.heading2}>
          <h2>What others are Watching</h2>
        </div>
        <div className={styles.prodContainer}>
          <div className={styles.prod}>
            {product.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.tab}>
        <div className={styles.add} onClick={handleCart}>
          Add To Cart
        </div>
        <div
                className={styles.buy}
                onClick={isDisabled ? null : handleProceed}
              >
                Buy Now
              </div>
      </div>
       */}
     
    
    
   {isAddOnOpen && (
          <>
            <div className={styles.backdrop} />
            <section className={styles.AddOn}>
              <div className={styles.top}>
                <h2>Add on something to make it extra special</h2>
                <FaTimes className={styles.icon} onClick={closeCart} />
              </div>
  
              <AddOn />
              <div className={styles.bottom}>
                <h2>Bottom</h2>
                <a className={styles.link} scroll={false} onClick={handleClick}>
                  <button className={styles.button2}>
                    {" "}
                    Continue Without Add On
                  </button>
                </a>
              </div>
            </section>
          </>
        )}
   </>
  );
};

const WrappedProduct = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return <Product productId={productId} />;
};

export default WrappedProduct;
