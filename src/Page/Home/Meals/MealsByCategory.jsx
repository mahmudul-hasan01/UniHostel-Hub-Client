import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MealsItems from './MealsItems';
import useMeals from '../../../Hooks/useMeals';

const MealsByCategory = () => {

    const {mealsData} = useMeals()
    
    const dessert = mealsData.filter(item => item?.category === 'dessert')
    // const pizza = mealsData.filter(item => item.category === 'pizza')
    const soup = mealsData.filter(item => item.category === 'soup')
    const salad = mealsData.filter(item => item.category === 'salad')
    // const drinks = mealsData.filter(item => item.category === 'drinks')


    return (
        <div className='text-center'>
            <Tabs>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>

                <TabPanel>
                    <MealsItems items={soup}></MealsItems>
                </TabPanel>
                <TabPanel>
                    <MealsItems items={salad}></MealsItems>
                </TabPanel>
                <TabPanel>
                    <MealsItems items={dessert}></MealsItems>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsByCategory;