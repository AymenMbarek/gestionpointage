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

/* personne/index.html.twig */
class __TwigTemplate_cbbaecaad6fe603fdb28701c48b7f1b3 extends Template
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
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "personne/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "personne/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Personne index";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <h1>Personne index</h1>

    <table class=\"table\">
        <thead>
            <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Code</th>
                <th>Actif</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Genre</th>
                <th>DateDeNaissance</th>
                <th>Ncin</th>
                <th>ValidateCin</th>
                <th>IdBadge</th>
                <th>Nmobile</th>
                <th>Email</th>
                <th>NumeroMaison</th>
                <th>Adresse</th>
                <th>CodePostale</th>
                <th>Ville</th>
                <th>Pays</th>
                <th>Qualification</th>
                <th>Remarque</th>
                <th>Profile</th>
                <th>Taux</th>
                <th>HeuresMax</th>
                <th>FormationSecurite</th>
                <th>ValiditeFormationSecurite</th>
                <th>AutoriseesEvaluation</th>
                <th>Valeur</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
        ";
        // line 42
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["personnes"]) || array_key_exists("personnes", $context) ? $context["personnes"] : (function () { throw new RuntimeError('Variable "personnes" does not exist.', 42, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["personne"]) {
            // line 43
            echo "            <tr>
                <td>";
            // line 44
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "id", [], "any", false, false, false, 44), "html", null, true);
            echo "</td>
                <td>";
            // line 45
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "type", [], "any", false, false, false, 45), "html", null, true);
            echo "</td>
                <td>";
            // line 46
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "code", [], "any", false, false, false, 46), "html", null, true);
            echo "</td>
                <td>";
            // line 47
            echo ((twig_get_attribute($this->env, $this->source, $context["personne"], "actif", [], "any", false, false, false, 47)) ? ("Yes") : ("No"));
            echo "</td>
                <td>";
            // line 48
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "nom", [], "any", false, false, false, 48), "html", null, true);
            echo "</td>
                <td>";
            // line 49
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "prenom", [], "any", false, false, false, 49), "html", null, true);
            echo "</td>
                <td>";
            // line 50
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "genre", [], "any", false, false, false, 50), "html", null, true);
            echo "</td>
                <td>";
            // line 51
            ((twig_get_attribute($this->env, $this->source, $context["personne"], "dateDeNaissance", [], "any", false, false, false, 51)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "dateDeNaissance", [], "any", false, false, false, 51), "Y-m-d"), "html", null, true))) : (print ("")));
            echo "</td>
                <td>";
            // line 52
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "ncin", [], "any", false, false, false, 52), "html", null, true);
            echo "</td>
                <td>";
            // line 53
            ((twig_get_attribute($this->env, $this->source, $context["personne"], "validateCin", [], "any", false, false, false, 53)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "validateCin", [], "any", false, false, false, 53), "Y-m-d"), "html", null, true))) : (print ("")));
            echo "</td>
                <td>";
            // line 54
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "idBadge", [], "any", false, false, false, 54), "html", null, true);
            echo "</td>
                <td>";
            // line 55
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "nmobile", [], "any", false, false, false, 55), "html", null, true);
            echo "</td>
                <td>";
            // line 56
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "email", [], "any", false, false, false, 56), "html", null, true);
            echo "</td>
                <td>";
            // line 57
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "numeroMaison", [], "any", false, false, false, 57), "html", null, true);
            echo "</td>
                <td>";
            // line 58
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "adresse", [], "any", false, false, false, 58), "html", null, true);
            echo "</td>
                <td>";
            // line 59
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "codePostale", [], "any", false, false, false, 59), "html", null, true);
            echo "</td>
                <td>";
            // line 60
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "ville", [], "any", false, false, false, 60), "html", null, true);
            echo "</td>
                <td>";
            // line 61
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "pays", [], "any", false, false, false, 61), "html", null, true);
            echo "</td>
                <td>";
            // line 62
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "qualification", [], "any", false, false, false, 62), "html", null, true);
            echo "</td>
                <td>";
            // line 63
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "remarque", [], "any", false, false, false, 63), "html", null, true);
            echo "</td>
                <td>";
            // line 64
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "profile", [], "any", false, false, false, 64), "html", null, true);
            echo "</td>
                <td>";
            // line 65
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "taux", [], "any", false, false, false, 65), "html", null, true);
            echo "</td>
                <td>";
            // line 66
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "heuresMax", [], "any", false, false, false, 66), "html", null, true);
            echo "</td>
                <td>";
            // line 67
            echo ((twig_get_attribute($this->env, $this->source, $context["personne"], "formationSecurite", [], "any", false, false, false, 67)) ? ("Yes") : ("No"));
            echo "</td>
                <td>";
            // line 68
            ((twig_get_attribute($this->env, $this->source, $context["personne"], "validiteFormationSecurite", [], "any", false, false, false, 68)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "validiteFormationSecurite", [], "any", false, false, false, 68), "Y-m-d"), "html", null, true))) : (print ("")));
            echo "</td>
                <td>";
            // line 69
            echo ((twig_get_attribute($this->env, $this->source, $context["personne"], "autoriseesEvaluation", [], "any", false, false, false, 69)) ? ("Yes") : ("No"));
            echo "</td>
                <td>";
            // line 70
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["personne"], "valeur", [], "any", false, false, false, 70), "html", null, true);
            echo "</td>
                <td>
                    <a href=\"";
            // line 72
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_personne_show", ["id" => twig_get_attribute($this->env, $this->source, $context["personne"], "id", [], "any", false, false, false, 72)]), "html", null, true);
            echo "\">show</a>
                    <a href=\"";
            // line 73
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_personne_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["personne"], "id", [], "any", false, false, false, 73)]), "html", null, true);
            echo "\">edit</a>
                </td>
            </tr>
        ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 77
            echo "            <tr>
                <td colspan=\"28\">no records found</td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['personne'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 81
        echo "        </tbody>
    </table>

    <a href=\"";
        // line 84
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_personne_new");
        echo "\">Create new</a>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "personne/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  255 => 84,  250 => 81,  241 => 77,  232 => 73,  228 => 72,  223 => 70,  219 => 69,  215 => 68,  211 => 67,  207 => 66,  203 => 65,  199 => 64,  195 => 63,  191 => 62,  187 => 61,  183 => 60,  179 => 59,  175 => 58,  171 => 57,  167 => 56,  163 => 55,  159 => 54,  155 => 53,  151 => 52,  147 => 51,  143 => 50,  139 => 49,  135 => 48,  131 => 47,  127 => 46,  123 => 45,  119 => 44,  116 => 43,  111 => 42,  73 => 6,  66 => 5,  53 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Personne index{% endblock %}

{% block body %}
    <h1>Personne index</h1>

    <table class=\"table\">
        <thead>
            <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Code</th>
                <th>Actif</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Genre</th>
                <th>DateDeNaissance</th>
                <th>Ncin</th>
                <th>ValidateCin</th>
                <th>IdBadge</th>
                <th>Nmobile</th>
                <th>Email</th>
                <th>NumeroMaison</th>
                <th>Adresse</th>
                <th>CodePostale</th>
                <th>Ville</th>
                <th>Pays</th>
                <th>Qualification</th>
                <th>Remarque</th>
                <th>Profile</th>
                <th>Taux</th>
                <th>HeuresMax</th>
                <th>FormationSecurite</th>
                <th>ValiditeFormationSecurite</th>
                <th>AutoriseesEvaluation</th>
                <th>Valeur</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
        {% for personne in personnes %}
            <tr>
                <td>{{ personne.id }}</td>
                <td>{{ personne.type }}</td>
                <td>{{ personne.code }}</td>
                <td>{{ personne.actif ? 'Yes' : 'No' }}</td>
                <td>{{ personne.nom }}</td>
                <td>{{ personne.prenom }}</td>
                <td>{{ personne.genre }}</td>
                <td>{{ personne.dateDeNaissance ? personne.dateDeNaissance|date('Y-m-d') : '' }}</td>
                <td>{{ personne.ncin }}</td>
                <td>{{ personne.validateCin ? personne.validateCin|date('Y-m-d') : '' }}</td>
                <td>{{ personne.idBadge }}</td>
                <td>{{ personne.nmobile }}</td>
                <td>{{ personne.email }}</td>
                <td>{{ personne.numeroMaison }}</td>
                <td>{{ personne.adresse }}</td>
                <td>{{ personne.codePostale }}</td>
                <td>{{ personne.ville }}</td>
                <td>{{ personne.pays }}</td>
                <td>{{ personne.qualification }}</td>
                <td>{{ personne.remarque }}</td>
                <td>{{ personne.profile }}</td>
                <td>{{ personne.taux }}</td>
                <td>{{ personne.heuresMax }}</td>
                <td>{{ personne.formationSecurite ? 'Yes' : 'No' }}</td>
                <td>{{ personne.validiteFormationSecurite ? personne.validiteFormationSecurite|date('Y-m-d') : '' }}</td>
                <td>{{ personne.autoriseesEvaluation ? 'Yes' : 'No' }}</td>
                <td>{{ personne.valeur }}</td>
                <td>
                    <a href=\"{{ path('app_personne_show', {'id': personne.id}) }}\">show</a>
                    <a href=\"{{ path('app_personne_edit', {'id': personne.id}) }}\">edit</a>
                </td>
            </tr>
        {% else %}
            <tr>
                <td colspan=\"28\">no records found</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>

    <a href=\"{{ path('app_personne_new') }}\">Create new</a>
{% endblock %}
", "personne/index.html.twig", "D:\\salwa\\assit\\assist\\templates\\personne\\index.html.twig");
    }
}
