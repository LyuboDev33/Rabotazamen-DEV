<?php

namespace App\Http\Requests\Employer;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateJobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'company_id' => [
                'required',
                'integer',
                'exists:companies,id',
            ],

            'job_title' => [
                'required',
                'string',
                'max:255',
            ],

            'job_description' => [
                'required',
                'string',
            ],

            'job_category' => [
                'required',
                'integer',
                'exists:job_categories,id',
            ],

            'job_role' => [
                'required',
                'integer',
                'exists:job_roles,id',
            ],

            'job_min_salary' => [
                'required',
                'integer',
                'min:0',
            ],

            'job_max_salary' => [
                'required',
                'integer',
                'min:0',
                'gte:job_min_salary',
            ],

            'job_work_type' => [
                'required',
                'string',
            ],

            'job_employment_type' => [
                'required',
                'string',
            ],

            'job_level' => [
                'required',
                'string',
            ],

            'job_remote_option' => [
                'required',
                'string',
            ],

            'job_location' => [
                'required',
                'integer',
                'exists:cities,id',
            ],

            'job_address' => [
                'required',
                'string',
                'max:255',
            ],

            'job_annual_leave' => [
                'nullable',
                'integer',
                'min:0',
            ],

            'job_open_positions' => [
                'required',
                'integer',
                'min:1',
            ],

            'job_languages' => [
                'nullable',
                'array',
            ],

            'job_languages.*' => [
                'integer',
                'exists:languages,id',
            ],
        ];
    }

    /**
     * Get the custom validation messages.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'company_id.required' => 'Моля, изберете компания.',
            'company_id.integer'  => 'Избраната компания е невалидна.',
            'company_id.exists'   => 'Избраната компания не съществува.',

            'job_title.required' => 'Моля, въведете длъжност.',
            'job_title.string'   => 'Длъжността трябва да бъде текст.',
            'job_title.max'      => 'Длъжността не може да бъде по-дълга от 255 символа.',

            'job_description.required' => 'Моля, въведете описание и изисквания за позицията.',
            'job_description.string'   => 'Описанието трябва да бъде текст.',

            'job_category.required' => 'Моля, изберете категория.',
            'job_category.integer'  => 'Избраната категория е невалидна.',
            'job_category.exists'   => 'Избраната категория не съществува.',

            'job_role.required' => 'Моля, изберете подкатегория.',
            'job_role.integer'  => 'Избраната подкатегория е невалидна.',
            'job_role.exists'   => 'Избраната подкатегория не съществува.',

            'job_min_salary.required' => 'Моля, въведете минимална заплата.',
            'job_min_salary.integer'  => 'Минималната заплата трябва да бъде цяло число.',
            'job_min_salary.min'      => 'Минималната заплата не може да бъде отрицателна.',

            'job_max_salary.required' => 'Моля, въведете максимална заплата.',
            'job_max_salary.integer'  => 'Максималната заплата трябва да бъде цяло число.',
            'job_max_salary.min'      => 'Максималната заплата не може да бъде отрицателна.',
            'job_max_salary.gte'      => 'Максималната заплата трябва да бъде по-голяма или равна на минималната заплата.',

            'job_work_type.required' => 'Моля, изберете вид работа.',
            'job_work_type.string'   => 'Избраният вид работа е невалиден.',

            'job_employment_type.required' => 'Моля, изберете вид заетост.',
            'job_employment_type.string'   => 'Избраният вид заетост е невалиден.',

            'job_level.required' => 'Моля, изберете ниво на позицията.',
            'job_level.string'   => 'Избраното ниво на позицията е невалидно.',

            'job_remote_option.required' => 'Моля, изберете опция за дистанционна работа.',
            'job_remote_option.string'   => 'Избраната опция за дистанционна работа е невалидна.',

            'job_location.required' => 'Моля, изберете населено място.',
            'job_location.integer'  => 'Избраното населено място е невалидно.',
            'job_location.exists'   => 'Избраното населено място не съществува.',

            'job_address.required' => 'Моля, въведете адрес.',
            'job_address.string'   => 'Адресът трябва да бъде текст.',
            'job_address.max'      => 'Адресът не може да бъде по-дълъг от 255 символа.',

            'job_annual_leave.integer' => 'Годишният отпуск трябва да бъде число.',
            'job_annual_leave.min'     => 'Годишният отпуск не може да бъде отрицателно число.',

            'job_open_positions.required' => 'Моля, въведете броя отворени позиции.',
            'job_open_positions.integer'  => 'Броят отворени позиции трябва да бъде цяло число.',
            'job_open_positions.min'      => 'Трябва да има поне една отворена позиция.',

            'job_languages.array'     => 'Езиците трябва да бъдат изпратени като списък.',
            'job_languages.*.integer' => 'Един от избраните езици е невалиден.',
            'job_languages.*.exists'  => 'Един от избраните езици не съществува.',
        ];
    }
}
