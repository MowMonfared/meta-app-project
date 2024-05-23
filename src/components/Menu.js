import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id, 'id is clicked');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F4CE14',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, please order!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Ordered!',
          text: 'Your order has been added.',
          icon: 'success',
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* number of guests */}
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
