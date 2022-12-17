<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* personne/show.html.twig */
class __TwigTemplate_adf15dd2139a1ad1c34c86699205deed extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "personne/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "personne/show.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Personne";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <h1>Personne</h1>

    <table class=\"table\">
        <tbody>
            <tr>
                <th>Id</th>
                <td>";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 12, $this->source); })()), "id", [], "any", false, false, false, 12), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>";
        // line 16
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 16, $this->source); })()), "type", [], "any", false, false, false, 16), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Code</th>
                <td>";
        // line 20
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 20, $this->source); })()), "code", [], "any", false, false, false, 20), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Actif</th>
                <td>";
        // line 24
        echo ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 24, $this->source); })()), "actif", [], "any", false, false, false, 24)) ? ("Yes") : ("No"));
        echo "</td>
            </tr>
            <tr>
                <th>Nom</th>
                <td>";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 28, $this->source); })()), "nom", [], "any", false, false, false, 28), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Prenom</th>
                <td>";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 32, $this->source); })()), "prenom", [], "any", false, false, false, 32), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Genre</th>
                <td>";
        // line 36
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 36, $this->source); })()), "genre", [], "any", false, false, false, 36), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>DateDeNaissance</th>
                <td>";
        // line 40
        ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 40, $this->source); })()), "dateDeNaissance", [], "any", false, false, false, 40)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 40, $this->source); })()), "dateDeNaissance", [], "any", false, false, false, 40), "Y-m-d"), "html", null, true))) : (print ("")));
        echo "</td>
            </tr>
            <tr>
                <th>Ncin</th>
                <td>";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 44, $this->source); })()), "ncin", [], "any", false, false, false, 44), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>ValidateCin</th>
                <td>";
        // line 48
        ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 48, $this->source); })()), "validateCin", [], "any", false, false, false, 48)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 48, $this->source); })()), "validateCin", [], "any", false, false, false, 48), "Y-m-d"), "html", null, true))) : (print ("")));
        echo "</td>
            </tr>
            <tr>
                <th>IdBadge</th>
                <td>";
        // line 52
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 52, $this->source); })()), "idBadge", [], "any", false, false, false, 52), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Nmobile</th>
                <td>";
        // line 56
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 56, $this->source); })()), "nmobile", [], "any", false, false, false, 56), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>";
        // line 60
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 60, $this->source); })()), "email", [], "any", false, false, false, 60), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>NumeroMaison</th>
                <td>";
        // line 64
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 64, $this->source); })()), "numeroMaison", [], "any", false, false, false, 64), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Adresse</th>
                <td>";
        // line 68
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 68, $this->source); })()), "adresse", [], "any", false, false, false, 68), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>CodePostale</th>
                <td>";
        // line 72
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 72, $this->source); })()), "codePostale", [], "any", false, false, false, 72), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Ville</th>
                <td>";
        // line 76
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 76, $this->source); })()), "ville", [], "any", false, false, false, 76), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Pays</th>
                <td>";
        // line 80
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 80, $this->source); })()), "pays", [], "any", false, false, false, 80), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Qualification</th>
                <td>";
        // line 84
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 84, $this->source); })()), "qualification", [], "any", false, false, false, 84), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Remarque</th>
                <td>";
        // line 88
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 88, $this->source); })()), "remarque", [], "any", false, false, false, 88), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Profile</th>
                <td>";
        // line 92
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 92, $this->source); })()), "profile", [], "any", false, false, false, 92), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Taux</th>
                <td>";
        // line 96
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 96, $this->source); })()), "taux", [], "any", false, false, false, 96), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>HeuresMax</th>
                <td>";
        // line 100
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 100, $this->source); })()), "heuresMax", [], "any", false, false, false, 100), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>FormationSecurite</th>
                <td>";
        // line 104
        echo ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 104, $this->source); })()), "formationSecurite", [], "any", false, false, false, 104)) ? ("Yes") : ("No"));
        echo "</td>
            </tr>
            <tr>
                <th>ValiditeFormationSecurite</th>
                <td>";
        // line 108
        ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 108, $this->source); })()), "validiteFormationSecurite", [], "any", false, false, false, 108)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 108, $this->source); })()), "validiteFormationSecurite", [], "any", false, false, false, 108), "Y-m-d"), "html", null, true))) : (print ("")));
        echo "</td>
            </tr>
            <tr>
                <th>AutoriseesEvaluation</th>
                <td>";
        // line 112
        echo ((twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 112, $this->source); })()), "autoriseesEvaluation", [], "any", false, false, false, 112)) ? ("Yes") : ("No"));
        echo "</td>
            </tr>
            <tr>
                <th>Valeur</th>
                <td>";
        // line 116
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 116, $this->source); })()), "valeur", [], "any", false, false, false, 116), "html", null, true);
        echo "</td>
            </tr>
        </tbody>
    </table>

    <a href=\"";
        // line 121
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_personne_index");
        echo "\">back to list</a>

    <a href=\"";
        // line 123
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_personne_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["personne"]) || array_key_exists("personne", $context) ? $context["personne"] : (function () { throw new RuntimeError('Variable "personne" does not exist.', 123, $this->source); })()), "id", [], "any", false, false, false, 123)]), "html", null, true);
        echo "\">edit</a>

    ";
        // line 125
        echo twig_include($this->env, $context, "personne/_delete_form.html.twig");
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "personne/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  281 => 125,  276 => 123,  271 => 121,  263 => 116,  256 => 112,  249 => 108,  242 => 104,  235 => 100,  228 => 96,  221 => 92,  214 => 88,  207 => 84,  200 => 80,  193 => 76,  186 => 72,  179 => 68,  172 => 64,  165 => 60,  158 => 56,  151 => 52,  144 => 48,  137 => 44,  130 => 40,  123 => 36,  116 => 32,  109 => 28,  102 => 24,  95 => 20,  88 => 16,  81 => 12,  73 => 6,  66 => 5,  53 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Personne{% endblock %}

{% block body %}
    <h1>Personne</h1>

    <table class=\"table\">
        <tbody>
            <tr>
                <th>Id</th>
                <td>{{ personne.id }}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{{ personne.type }}</td>
            </tr>
            <tr>
                <th>Code</th>
                <td>{{ personne.code }}</td>
            </tr>
            <tr>
                <th>Actif</th>
                <td>{{ personne.actif ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>Nom</th>
                <td>{{ personne.nom }}</td>
            </tr>
            <tr>
                <th>Prenom</th>
                <td>{{ personne.prenom }}</td>
            </tr>
            <tr>
                <th>Genre</th>
                <td>{{ personne.genre }}</td>
            </tr>
            <tr>
                <th>DateDeNaissance</th>
                <td>{{ personne.dateDeNaissance ? personne.dateDeNaissance|date('Y-m-d') : '' }}</td>
            </tr>
            <tr>
                <th>Ncin</th>
                <td>{{ personne.ncin }}</td>
            </tr>
            <tr>
                <th>ValidateCin</th>
                <td>{{ personne.validateCin ? personne.validateCin|date('Y-m-d') : '' }}</td>
            </tr>
            <tr>
                <th>IdBadge</th>
                <td>{{ personne.idBadge }}</td>
            </tr>
            <tr>
                <th>Nmobile</th>
                <td>{{ personne.nmobile }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ personne.email }}</td>
            </tr>
            <tr>
                <th>NumeroMaison</th>
                <td>{{ personne.numeroMaison }}</td>
            </tr>
            <tr>
                <th>Adresse</th>
                <td>{{ personne.adresse }}</td>
            </tr>
            <tr>
                <th>CodePostale</th>
                <td>{{ personne.codePostale }}</td>
            </tr>
            <tr>
                <th>Ville</th>
                <td>{{ personne.ville }}</td>
            </tr>
            <tr>
                <th>Pays</th>
                <td>{{ personne.pays }}</td>
            </tr>
            <tr>
                <th>Qualification</th>
                <td>{{ personne.qualification }}</td>
            </tr>
            <tr>
                <th>Remarque</th>
                <td>{{ personne.remarque }}</td>
            </tr>
            <tr>
                <th>Profile</th>
                <td>{{ personne.profile }}</td>
            </tr>
            <tr>
                <th>Taux</th>
                <td>{{ personne.taux }}</td>
            </tr>
            <tr>
                <th>HeuresMax</th>
                <td>{{ personne.heuresMax }}</td>
            </tr>
            <tr>
                <th>FormationSecurite</th>
                <td>{{ personne.formationSecurite ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>ValiditeFormationSecurite</th>
                <td>{{ personne.validiteFormationSecurite ? personne.validiteFormationSecurite|date('Y-m-d') : '' }}</td>
            </tr>
            <tr>
                <th>AutoriseesEvaluation</th>
                <td>{{ personne.autoriseesEvaluation ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>Valeur</th>
                <td>{{ personne.valeur }}</td>
            </tr>
        </tbody>
    </table>

    <a href=\"{{ path('app_personne_index') }}\">back to list</a>

    <a href=\"{{ path('app_personne_edit', {'id': personne.id}) }}\">edit</a>

    {{ include('personne/_delete_form.html.twig') }}
{% endblock %}
", "personne/show.html.twig", "D:\\salwa\\assit\\assist\\templates\\personne\\show.html.twig");
    }
}
