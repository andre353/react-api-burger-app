import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeIsFormTouched,
  submitForm,
  updateFormValue,
  validateForm,
} from '../../store/form/formSlice';
import { closeModal } from '../../store/modalDelivery/modalDeliverySlice';
import style from './ModalDelivery.module.scss';

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartList } = useSelector((state) => state.cart);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(
      updateFormValue({
        field: e.target.name,
        value: e.target.value,
      }),
    );
    dispatch(validateForm());
    dispatch(changeIsFormTouched());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());

    if (Object.keys(form.notifications).length === 0 && form.isFormTouched) {
      dispatch(submitForm({ ...form, cartList })); // данные с инпутов из bd + localStorage
    }
    // dispatch(changeIsFormTouched());
  };

  return (
    isOpen && (
      <div
        className={style.modal}
        onClick={({ target, currentTarget }) => {
          // console.log('target, currentTarget: ', target, currentTarget);
          if (target === currentTarget) {
            dispatch(closeModal());
          }
        }}
      >
        <div className={style.mdelivery}>
          <div className={style.container}>
            <h2 className={style.title}>Доставка</h2>

            <form className={style.form} id='delivery' onSubmit={handleSubmit}>
              <fieldset className={style.fieldset}>
                <label>
                  <input
                    className={style.input}
                    type='text'
                    name='name'
                    placeholder='Ваше имя'
                    value={form.name}
                    onChange={handleInputChange}
                  />
                  {form.notifications.name && <span className={style.notification}>Заполните поле</span>}
                </label>
                <label>
                  <input
                    className={style.input}
                    type='tel'
                    name='phone'
                    placeholder='Телефон'
                    value={form.phone}
                    onChange={handleInputChange}
                  />
                  {form.notifications.phone && <span className={style.notification}>Заполните поле</span>}
                </label>
              </fieldset>

              <fieldset className={style.fieldset_radio}>
                <label className={style.label}>
                  <input
                    className={style.radio}
                    type='radio'
                    name='format'
                    value='pickup'
                    checked={form.format === 'pickup'}
                    onChange={handleInputChange}
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={style.label}>
                  <input
                    className={style.radio}
                    type='radio'
                    name='format'
                    value='delivery'
                    checked={form.format === 'delivery'}
                    onChange={handleInputChange}
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              {form.format === 'delivery' && (
                <fieldset className={style.fieldset}>
                  <label>
                    <input
                      className={style.input}
                      type='text'
                      name='address'
                      placeholder='Улица, дом, квартира'
                      value={form.address}
                      onChange={handleInputChange}
                    />
                    {form.notifications.address && <span className={style.notification}>Заполните поле</span>}
                  </label>
                  <label>
                    <input
                      className={classNames(style.input, style.input_half)}
                      type='number'
                      name='floor'
                      placeholder='Этаж'
                      value={form.floor}
                      onChange={handleInputChange}
                    />
                    {form.notifications.floor && <span className={style.notification}>Заполните поле</span>}
                  </label>
                  <label>
                    <input
                      className={classNames(style.input, style.input_half)}
                      type='number'
                      name='intercom'
                      placeholder='Домофон'
                      value={form.intercom}
                      onChange={handleInputChange}
                    />
                    {form.notifications.intercom && <span className={style.notification}>Заполните поле</span>}
                  </label>
                </fieldset>
              )}
            </form>

            <button className={style.submit} type='submit' form='delivery'>
              Оформить
            </button>
            {/* {form.isFormTouched && Object.entries(form.notifications).map(([key, err]) => (
              <p key={key}>{err}</p>
            ))} */}
          </div>

          <button
            className={style.close}
            type='button'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='5.07422'
                y='5.28247'
                width='1'
                height='20'
                transform='rotate(-45 5.07422 5.28247)'
              />
              <rect
                x='5.78125'
                y='19.4246'
                width='1'
                height='20'
                transform='rotate(-135 5.78125 19.4246)'
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
