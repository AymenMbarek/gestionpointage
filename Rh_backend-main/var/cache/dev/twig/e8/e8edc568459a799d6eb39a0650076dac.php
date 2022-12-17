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

/* @VichUploader/Collector/mapping_collector.html.twig */
class __TwigTemplate_1b6dd0573d4442538a81682bfb984049 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'toolbar' => [$this, 'block_toolbar'],
            'menu' => [$this, 'block_menu'],
            'panel' => [$this, 'block_panel'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@VichUploader/Collector/mapping_collector.html.twig"));

        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "toolbar"));

        // line 4
        echo "    ";
        ob_start();
        // line 5
        echo "        ";
        $this->loadTemplate("@VichUploader/Collector/icon_grey.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 5)->display($context);
        // line 6
        echo "        <span class=\"sf-toolbar-value\">";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 6, $this->source); })()), "mappingsCount", [], "any", false, false, false, 6), "html", null, true);
        echo "</span>
    ";
        $context["icon"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 8
        echo "
    ";
        // line 9
        ob_start();
        // line 10
        echo "        <div class=\"sf-toolbar-info-piece\">
            <b>Mappings</b>
            <span class=\"sf-toolbar-status sf-toolbar-status-grey\">";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 12, $this->source); })()), "mappingsCount", [], "any", false, false, false, 12), "html", null, true);
        echo "</span>
        </div>
    ";
        $context["text"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 15
        echo "
    ";
        // line 16
        echo twig_include($this->env, $context, "@WebProfiler/Profiler/toolbar_item.html.twig", ["link" => true]);
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 19
    public function block_menu($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "menu"));

        // line 20
        echo "    ";
        // line 21
        echo "    <span class=\"label\">
        <span class=\"icon\">
            ";
        // line 23
        $this->loadTemplate("@VichUploader/Collector/icon_white.html.twig", "@VichUploader/Collector/mapping_collector.html.twig", 23)->display($context);
        // line 24
        echo "        </span>
        <strong>VichUploader</strong>
    </span>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 29
    public function block_panel($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "panel"));

        // line 30
        echo "    <h2>VichUploaderBundle Mappings</h2>
    <table>
        <thead>
            <tr>
                <th scope=\"col\">Field</th>
                <th scope=\"col\">Mapping</th>
                <th scope=\"col\">Filename property</th>
                <th scope=\"col\">Size property</th>
                <th scope=\"col\">Mime Type property</th>
                <th scope=\"col\">Original Name property</th>
                <th scope=\"col\">Dimensions property</th>
            </tr>
        </thead>
        <tbody>
            ";
        // line 44
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["collector"]) || array_key_exists("collector", $context) ? $context["collector"] : (function () { throw new RuntimeError('Variable "collector" does not exist.', 44, $this->source); })()), "mappings", [], "any", false, false, false, 44));
        foreach ($context['_seq'] as $context["class"] => $context["data"]) {
            // line 45
            echo "                <tr>
                    <th scope=\"row\" colspan=\"4\">";
            // line 46
            echo twig_escape_filter($this->env, $context["class"], "html", null, true);
            echo "</th>
                </tr>
                ";
            // line 48
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($context["data"]);
            foreach ($context['_seq'] as $context["_key"] => $context["mdata"]) {
                // line 49
                echo "                    <tr>
                        <td>";
                // line 50
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["mdata"], "propertyName", [], "any", false, false, false, 50), "html", null, true);
                echo "</td>
                        <td>";
                // line 51
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["mdata"], "mapping", [], "any", false, false, false, 51), "html", null, true);
                echo "</td>
                        <td>";
                // line 52
                echo ((twig_get_attribute($this->env, $this->source, $context["mdata"], "fileNameProperty", [], "any", true, true, false, 52)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["mdata"], "fileNameProperty", [], "any", false, false, false, 52), "<span class=\"text-danger\">Not Set</span>")) : ("<span class=\"text-danger\">Not Set</span>"));
                echo "</td>
                        <td>";
                // line 53
                echo ((twig_get_attribute($this->env, $this->source, $context["mdata"], "size", [], "any", true, true, false, 53)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["mdata"], "size", [], "any", false, false, false, 53), "<span class=\"text-danger\">Not Set</span>")) : ("<span class=\"text-danger\">Not Set</span>"));
                echo "</td>
                        <td>";
                // line 54
                echo ((twig_get_attribute($this->env, $this->source, $context["mdata"], "mimeType", [], "any", true, true, false, 54)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["mdata"], "mimeType", [], "any", false, false, false, 54), "<span class=\"text-danger\">Not Set</span>")) : ("<span class=\"text-danger\">Not Set</span>"));
                echo "</td>
                        <td>";
                // line 55
                echo ((twig_get_attribute($this->env, $this->source, $context["mdata"], "originalName", [], "any", true, true, false, 55)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["mdata"], "originalName", [], "any", false, false, false, 55), "<span class=\"text-danger\">Not Set</span>")) : ("<span class=\"text-danger\">Not Set</span>"));
                echo "</td>
                        <td>";
                // line 56
                echo ((twig_get_attribute($this->env, $this->source, $context["mdata"], "dimensions", [], "any", true, true, false, 56)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["mdata"], "dimensions", [], "any", false, false, false, 56), "<span class=\"text-danger\">Not Set</span>")) : ("<span class=\"text-danger\">Not Set</span>"));
                echo "</td>
                    </tr>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['mdata'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 59
            echo "            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['class'], $context['data'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "        </tbody>
    </table>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "@VichUploader/Collector/mapping_collector.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  206 => 60,  200 => 59,  191 => 56,  187 => 55,  183 => 54,  179 => 53,  175 => 52,  171 => 51,  167 => 50,  164 => 49,  160 => 48,  155 => 46,  152 => 45,  148 => 44,  132 => 30,  125 => 29,  115 => 24,  113 => 23,  109 => 21,  107 => 20,  100 => 19,  91 => 16,  88 => 15,  82 => 12,  78 => 10,  76 => 9,  73 => 8,  67 => 6,  64 => 5,  61 => 4,  54 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}
    {% set icon %}
        {% include '@VichUploader/Collector/icon_grey.html.twig' %}
        <span class=\"sf-toolbar-value\">{{ collector.mappingsCount }}</span>
    {% endset %}

    {% set text %}
        <div class=\"sf-toolbar-info-piece\">
            <b>Mappings</b>
            <span class=\"sf-toolbar-status sf-toolbar-status-grey\">{{ collector.mappingsCount }}</span>
        </div>
    {% endset %}

    {{ include('@WebProfiler/Profiler/toolbar_item.html.twig', { 'link': true }) }}
{% endblock %}

{% block menu %}
    {# This left-hand menu appears when using the full-screen profiler. #}
    <span class=\"label\">
        <span class=\"icon\">
            {% include '@VichUploader/Collector/icon_white.html.twig' %}
        </span>
        <strong>VichUploader</strong>
    </span>
{% endblock %}

{% block panel %}
    <h2>VichUploaderBundle Mappings</h2>
    <table>
        <thead>
            <tr>
                <th scope=\"col\">Field</th>
                <th scope=\"col\">Mapping</th>
                <th scope=\"col\">Filename property</th>
                <th scope=\"col\">Size property</th>
                <th scope=\"col\">Mime Type property</th>
                <th scope=\"col\">Original Name property</th>
                <th scope=\"col\">Dimensions property</th>
            </tr>
        </thead>
        <tbody>
            {% for class, data in collector.mappings %}
                <tr>
                    <th scope=\"row\" colspan=\"4\">{{ class }}</th>
                </tr>
                {% for mdata in data %}
                    <tr>
                        <td>{{ mdata.propertyName }}</td>
                        <td>{{ mdata.mapping }}</td>
                        <td>{{ mdata.fileNameProperty|default('<span class=\"text-danger\">Not Set</span>')|raw }}</td>
                        <td>{{ mdata.size|default('<span class=\"text-danger\">Not Set</span>')|raw }}</td>
                        <td>{{ mdata.mimeType|default('<span class=\"text-danger\">Not Set</span>')|raw }}</td>
                        <td>{{ mdata.originalName|default('<span class=\"text-danger\">Not Set</span>')|raw }}</td>
                        <td>{{ mdata.dimensions|default('<span class=\"text-danger\">Not Set</span>')|raw }}</td>
                    </tr>
                {% endfor %}
            {% endfor %}
        </tbody>
    </table>
{% endblock %}
", "@VichUploader/Collector/mapping_collector.html.twig", "D:\\salwa\\assit\\assist\\vendor\\vich\\uploader-bundle\\templates\\Collector\\mapping_collector.html.twig");
    }
}
