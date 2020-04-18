import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const WorkoutDetailsMetricsFilterCategories = ({ categories }) => {

    const renderCategoriesChip = () => {
        return (
            categories.map((category, i) => 
                <button key={i} onClick={() => console.log(category.name)} className="page__workouts__details__metrics__filter__categories__chip shadow-sm text-dark mr-2 px-4">
                    <span>{category.name}</span>
                </button>
            )
        )
    }

    return (
        <div className="page__workouts__details__metrics__filter__categories mt-2">
            <button onClick={() => console.log('all')} className="page__workouts__details__metrics__filter__categories__chip shadow-sm text-dark mr-2 px-4">
                All
            </button>
            {renderCategoriesChip()}
        </div>
    )
}

WorkoutDetailsMetricsFilterCategories.propTypes = {
    categories: PropTypes.array.isRequired
}

export default WorkoutDetailsMetricsFilterCategories