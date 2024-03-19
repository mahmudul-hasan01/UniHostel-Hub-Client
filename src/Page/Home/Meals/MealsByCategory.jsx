import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MealsItems from './MealsItems';
import useMeals from '../../../Hooks/useMeals';

const MealsByCategory = () => {

    const { mealsData } = useMeals()

    const Breakfast = mealsData.filter(item => item?.category === 'breakfast')
    const Lunch = mealsData.filter(item => item.category === 'Lunch')
    const Dinner = mealsData.filter(item => item.category === 'Dinner')


    return (
        <div className='text-center'>
            <Tabs>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>

                <TabPanel>
                    <MealsItems items={Breakfast}></MealsItems>
                </TabPanel>
                <TabPanel>
                    <MealsItems items={Lunch}></MealsItems>
                </TabPanel>
                <TabPanel>
                    <MealsItems items={Dinner}></MealsItems>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsByCategory;