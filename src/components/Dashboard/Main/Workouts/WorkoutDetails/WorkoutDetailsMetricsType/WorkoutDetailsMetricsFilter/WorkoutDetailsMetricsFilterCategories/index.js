import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const WorkoutDetailsMetricsFilterCategories = ({ 
    categories,
    handleFilter
}) => {
    const [categoriesState, setCategoriesState] = useState([])

    useEffect(() => {
        setCategoriesState(categories.map(category => ({
            ...category,
            isSelected: false
        })))
    }, [])

    const handleOnSelect = (name = '') => {
        setCategoriesState(categoriesState.map(category => {
            if (category.name === name) {
                return {
                    ...category,
                    isSelected: true
                }
            }

            return {
                ...category,
                isSelected: false
            }
        }))
        handleFilter(name)
    }

    const renderCategoriesChip = () => {
        return (
            categoriesState.map((category, i) => 
                <button key={i} onClick={() => handleOnSelect(category.name)} className={category.isSelected ? 'page__workouts__details__metrics__filter__categories__chip --active shadow-sm text-dark mr-2 px-4' : 'page__workouts__details__metrics__filter__categories__chip shadow-sm text-dark mr-2 px-4'}>
                    <span>{category.name}</span>
                </button>
            )
        )
    }

    return (
        <div className="page__workouts__details__metrics__filter__categories mt-2">
            <button onClick={() => handleOnSelect('all')} className="page__workouts__details__metrics__filter__categories__chip shadow-sm text-dark mr-2 px-4">
                All
            </button>
            {renderCategoriesChip()}
        </div>
    )
}

WorkoutDetailsMetricsFilterCategories.propTypes = {
    categories: PropTypes.array.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default WorkoutDetailsMetricsFilterCategories