<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models\Admin{
/**
 * @property int $id
 * @property string $language_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language whereLanguageName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Language whereUpdatedAt($value)
 */
	class Language extends \Eloquent {}
}

namespace App\Models\Backend{
/**
 * @property int $id
 * @property int|null $user_id
 * @property string|null $professional_title
 * @property string|null $phone
 * @property string|null $location
 * @property string|null $profile_status
 * @property string|null $work_status
 * @property string|null $years_experience
 * @property string|null $seniority
 * @property string|null $min_salary
 * @property string|null $max_salary
 * @property array<array-key, mixed>|null $skills
 * @property array<array-key, mixed>|null $work_model
 * @property string|null $about_me
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Backend\Candidate\CandidateCV> $cvs
 * @property-read int|null $cvs_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Backend\Candidate\CandidateEducation> $education
 * @property-read int|null $education_count
 * @property-read \App\Models\User|null $user
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Backend\Candidate\CandidateWorkExperience> $workExperience
 * @property-read int|null $work_experience_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereAboutMe($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereMaxSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereMinSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereProfessionalTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereProfileStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereSeniority($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereSkills($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereWorkModel($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereWorkStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Candidate whereYearsExperience($value)
 */
	class Candidate extends \Eloquent {}
}

namespace App\Models\Backend\Candidate{
/**
 * @property int $id
 * @property int $candidate_id
 * @property string $file_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Backend\Candidate $candidate
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV whereCandidateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV whereFileName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateCV whereUpdatedAt($value)
 */
	class CandidateCV extends \Eloquent {}
}

namespace App\Models\Backend\Candidate{
/**
 * @property int $id
 * @property int $candidate_id
 * @property string $institution
 * @property string $specialty
 * @property string $degree
 * @property string $city
 * @property string $start_year
 * @property string $start_month
 * @property string $end_year
 * @property string $end_month
 * @property int $is_current
 * @property string|null $certificate
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereCandidateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereCertificate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereDegree($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereEndMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereEndYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereInstitution($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereIsCurrent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereSpecialty($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereStartMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereStartYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateEducation whereUpdatedAt($value)
 */
	class CandidateEducation extends \Eloquent {}
}

namespace App\Models\Backend\Candidate{
/**
 * @property int $id
 * @property int $candidate_id
 * @property string $position
 * @property string $company
 * @property string $start_year
 * @property string $start_month
 * @property string $end_year
 * @property string $end_month
 * @property int $is_current
 * @property string $location
 * @property string $responsibilities
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereCandidateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereEndMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereEndYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereIsCurrent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereResponsibilities($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereStartMonth($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereStartYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CandidateWorkExperience whereUpdatedAt($value)
 */
	class CandidateWorkExperience extends \Eloquent {}
}

namespace App\Models\Backend{
/**
 * @property int $id
 * @property string|null $status
 * @property string $company_eik
 * @property string $company_name
 * @property string $company_industry
 * @property string $company_size
 * @property string $company_location
 * @property string $company_address
 * @property string|null $company_website
 * @property string $company_logo
 * @property string $company_banner
 * @property string $company_full_description
 * @property array<array-key, mixed> $company_benefits
 * @property array<array-key, mixed> $work_locations
 * @property array<array-key, mixed> $work_languages
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyBanner($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyBenefits($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyEik($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyFullDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyIndustry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanySize($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCompanyWebsite($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereWorkLanguages($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Company whereWorkLocations($value)
 */
	class Company extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $blog_name
 * @property string $blog_slug
 * @property string $blog_content
 * @property string $blog_image
 * @property int|null $author_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $author
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereAuthorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereBlogContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereBlogImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereBlogName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereBlogSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Blog whereUpdatedAt($value)
 */
	class Blog extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $city_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCityName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|City whereUpdatedAt($value)
 */
	class City extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\JobRole> $job_roles
 * @property-read int|null $job_roles_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobCategory whereUpdatedAt($value)
 */
	class JobCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $job_id
 * @property int $language_id
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage whereJobId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobLanguage whereLanguageId($value)
 */
	class JobLanguage extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property int $category_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\JobCategory $category
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|JobRole whereUpdatedAt($value)
 */
	class JobRole extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Role> $roles
 * @property-read int|null $roles_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Permission whereUpdatedAt($value)
 */
	class Permission extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $role_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereRoleName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereUpdatedAt($value)
 */
	class Role extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $role_id
 * @property int $permission_id
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleHasPermission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleHasPermission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleHasPermission query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleHasPermission wherePermissionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleHasPermission whereRoleId($value)
 */
	class RoleHasPermission extends \Eloquent {}
}

namespace App\Models{
/**
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RoleUser query()
 */
	class RoleUser extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $ticket_name
 * @property string $ticket_reason
 * @property int $user_id
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\TicketMessage> $messages
 * @property-read int|null $messages_count
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereTicketName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereTicketReason($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ticket whereUserId($value)
 */
	class Ticket extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $ticket_id
 * @property string $ticket_content
 * @property string $ticket_sender_name
 * @property string $ticket_sender_role
 * @property int $ticket_is_seen
 * @property int|null $admin_id
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Ticket $ticket
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereAdminId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereTicketContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereTicketId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereTicketIsSeen($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereTicketSenderName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereTicketSenderRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|TicketMessage whereUserId($value)
 */
	class TicketMessage extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property string|null $phone
 * @property string|null $profile_pic
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string|null $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $stripe_id
 * @property string|null $pm_type
 * @property string|null $pm_last_four
 * @property string|null $trial_ends_at
 * @property string|null $google_id
 * @property string|null $google_token
 * @property string|null $google_refresh_token
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Blog> $articles
 * @property-read int|null $articles_count
 * @property-read \App\Models\Backend\Candidate|null $candidate
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Backend\Company> $companies
 * @property-read int|null $companies_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Role> $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Cashier\Subscription> $subscriptions
 * @property-read int|null $subscriptions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Ticket> $tickets
 * @property-read int|null $tickets_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User hasExpiredGenericTrial()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User onGenericTrial()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereGoogleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereGoogleRefreshToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereGoogleToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePmLastFour($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePmType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereProfilePic($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereStripeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereTrialEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 */
	class User extends \Eloquent implements \Illuminate\Contracts\Auth\MustVerifyEmail {}
}

